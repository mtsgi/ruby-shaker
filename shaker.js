import Kaf from 'https://cdn.jsdelivr.net/gh/mtsgi/kafjs@0.1.2/kaf.js'
const kaf = new Kaf({
  elem: 'body',
  data: {
    full_text: 'これは<ruby>試<rt>し</rt>験<rt>けん</rt></ruby>です。'
  },
  styles: {
    header: {
      fontSize: '24px',
      padding: '12px'
    },
    textarea: {
      width: 'calc(100% - 24px)',
      margin: '0 12px'
    },
    pre: {
      fontSize: '20px'
    }
  }
})
console.log(kaf)
