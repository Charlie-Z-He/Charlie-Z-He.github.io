/* 中英文共用同一份模拟状态；只翻译呈现给用户的文字。 */
(() => {
  const phrases = window.d0009English;
  const han = /[\u3400-\u9fff]/;
  const punctuation = {'，': ', ', '。': '. ', '；': '; ', '：': ': ', '（': ' (', '）': ') ', '／': '/', '＋': '+', '、': ', ', '“': '“', '”': '”'};
  const entry = new URL(location.href).searchParams.get('lang');
  let english = entry ? entry === 'en' : localStorage.getItem('d0009-language') !== 'zh';
  const original = new WeakMap();
  const attrs = ['title','aria-label','placeholder','alt','aria-description'];
  function translate(s) {
    if (!han.test(s)) return s;
    if (phrases[s]) return phrases[s];
    // 先解析完整数值和单位，再翻译其余词组。旧版半径标签省略了“光年”。
    s = s.replace(/(\d)亿(?=(?:曲率)?半径)/g, '$1亿光年');
    s = s.replace(/(\d[\d,]*(?:\.\d+)?)\s*(?:(万亿|千亿|百亿|十亿|亿|千万|百万|十万|万|千(?!米))\s*)?(光年|千米|年|天)/g, formatQuantity);
    s = s.replace(/(\d[\d,]*(?:\.\d+)?)\s*(万亿|千亿|百亿|十亿|亿|千万|百万|十万|万)/g,
      (match, digits, magnitude) => formatQuantity(match, digits, magnitude));
    return s.replace(/[\u3400-\u9fff]+|[，。；：（）／＋、]/g, (word, offset) => {
      if (punctuation[word]) return punctuation[word];
      const value = phrases[word];
      if (value === undefined) return word;
      const before = /[\w%)]/.test(s[offset - 1] || '') ? ' ' : '';
      const after = /[\w(]/.test(s[offset + word.length] || '') ? ' ' : '';
      return before + value + after;
    }).replace(/ {2,}/g,' ').replace(/ +([,.;:)])/g,'$1');
  }
  const englishNumber = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 15 });
  const magnitudes = {'':1, '千':1e3, '万':1e4, '十万':1e5, '百万':1e6, '千万':1e7, '亿':1e8, '十亿':1e9, '百亿':1e10, '千亿':1e11, '万亿':1e12};
  function formatQuantity(_, digits, magnitude, unit) {
    const value = Number(digits.replaceAll(',', '')) * magnitudes[magnitude || ''];
    if (unit === '千米' || unit === '天') {
      const symbol = unit === '千米' ? 'km' : value === 1 ? 'day' : 'days';
      return englishNumber.format(value) + ' ' + symbol;
    }
    const factor = value >= 1e9 ? 1e9 : value >= 1e6 ? 1e6 : value >= 1e3 ? 1e3 : 1;
    if (unit) {
      const prefix = {1:'', 1000:'k', 1000000:'M', 1000000000:'G'}[factor];
      const symbol = unit === '年' ? 'yr' : 'ly';
      return englishNumber.format(value / factor) + ' ' + prefix + symbol;
    }
    if (value < 1e6) return englishNumber.format(value);
    const divisor = value >= 1e12 ? 1e12 : factor;
    const name = {1000000:'million', 1000000000:'billion', 1000000000000:'trillion'}[divisor];
    return englishNumber.format(value / divisor) + ' ' + name;
  }
  function update(node, attr) {
    const current = attr ? node.getAttribute(attr) : node.data;
    if (!current) return;
    const record = original.get(node);
    const previous = record?.get(attr);
    const source = previous?.translated === current ? previous.source : current;
    if (!han.test(source)) return;
    const translated = english ? translate(source) : source;
    if (translated === current) return;
    const fields = record || new Map();
    fields.set(attr, {source, translated});
    original.set(node, fields);
    if (attr) node.setAttribute(attr, translated);
    else node.data = translated;
  }
  // 固定包按中文原文判断焦点是否改变。保留这三个标签供模拟读取的值，
  // 否则翻译后的显示文本会让每一帧都触发一次 180ms 淡入。
  const labelText = Object.getOwnPropertyDescriptor(Node.prototype, 'textContent');
  function preserveFocusSource(element) {
    if (!['reticleLabel','objectId','structureLabel'].includes(element.id) ||
        Object.hasOwn(element,'textContent')) return;
    Object.defineProperty(element, 'textContent', {
      configurable: true,
      get() {
        const displayed = labelText.get.call(this);
        const saved = original.get(this.firstChild)?.get(null);
        return saved && displayed === saved.translated ? saved.source : displayed;
      },
      set(content) { labelText.set.call(this, content); }
    });
  }
  function visit(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.parentElement?.closest('script,style,#languagePicker')) update(node, null);
      return;
    }
    if (node.nodeType !== Node.ELEMENT_NODE || node.matches('script,style,#languagePicker')) return;
    preserveFocusSource(node);
    for (const attr of attrs) if (node.hasAttribute(attr)) update(node, attr);
    for (const child of node.childNodes) visit(child);
  }
  for (const method of ['fillText','strokeText']) {
    const draw = CanvasRenderingContext2D.prototype[method];
    CanvasRenderingContext2D.prototype[method] = function (s, ...args) {
      return draw.call(this, english ? translate(String(s)) : s, ...args);
    };
  }
  function mount() {
    const picker = document.createElement('select');
    picker.id = 'languagePicker';
    picker.style.cssText = 'background:#13201b;color:#e1eee7;border:1px solid #536c60;border-radius:5px;padding:6px;max-width:7em;flex:none;color-scheme:dark';
    picker.add(new Option('English','en'));
    picker.add(new Option('中文','zh'));
    picker.value = english ? 'en' : 'zh';
    function position() {
      const header = document.querySelector('header');
      if (header && picker.parentElement !== header) {
        picker.style.position = ''; header.append(picker);
      } else if (!picker.isConnected) {
        Object.assign(picker.style,{position:'fixed',top:'6px',right:'8px',zIndex:'9999'});
        document.body.append(picker);
      }
    }
    function refresh() {
      document.documentElement.lang = english ? 'en' : 'zh-CN';
      picker.setAttribute('aria-label',english ? 'Language' : '语言');
      visit(document.documentElement);
    }
    picker.onchange = () => {
      english = picker.value === 'en';
      localStorage.setItem('d0009-language',picker.value);
      const url = new URL(location.href);
      url.searchParams.set('lang',picker.value);
      history.replaceState(history.state,'',url);
      refresh();
      if (document.querySelector('canvas') && location.pathname.endsWith('/dynamics.html')) location.reload();
    };
    position(); refresh();
    new MutationObserver(records => {
      for (const change of records) {
        if (change.type === 'childList') for (const node of change.addedNodes) visit(node);
        else if (change.type === 'attributes') update(change.target, change.attributeName);
        else visit(change.target);
      }
      if (!picker.isConnected || picker.style.position === 'fixed') position();
    }).observe(document.documentElement,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:attrs});
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount);
  else mount();
})();
