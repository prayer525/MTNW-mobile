# NuxtJS
Vue 프로젝트에 NuxtJS를 사용하는 대다수의 이유는 SEO 기능의 지원 때문일 것이다.
Vue, React 등은 Virture DOM을 사용하여 CSR 방식으로 페이지를 생성한다.
대부분의 웹 크롤러, 봇들은 JS를 실행시키지 못하고 HTML에서만 컨텐츠를 수집하기 때문에 CSR 방식으로 개발된 페이지를 빈 페이지로 인식하게 된다.
여기서 SEO(검색 엔진 최적화) 문제가 발생하게 되는데 NuxtJS를 사용하면 페이지를 SSR 방식으로 제공할 수 있기 때문에 더 나은 SEO 환경을 제공하게 된다.
물론 직접 SSR 기능을 구현할 수도 있겠으나 이는 매우 번거롭기 때문에 NuxtJS를 사용함으로서 개발 속도를 높이고, 일반적인 위험으로부터 벗어날 수 있다.

## Git Clone
```
$> git clone https://github.com/prayer525/nuxtjs.git
```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).


## 폴더 구조 설명


```nuxt
├─ assets
├─ components
├─ layouts
├─ middleware
├─ pages
├─ plugins
├─ static
├─ store
└─ test
```

### assets
LESS, SASS, JS 같은 컴파일되지 않은 에셋들을 포함하는 디렉토리이다.

### components
VueJs 컴포넌트를 포함하는 디렉토리이다.

### layouts
애플리케이션의 레이아웃을 포함하는 디렉토리이다.

### middleware
애플리케이션의 미들웨어를 포함하는 디렉토리이다. 미들웨어는 페이지나 레이아웃이 렌더링 되기 전에 실행할 사용자 정의 함수를 정의할 수 있다.

### pages
애플리케이션의 뷰와 라우트를 포함하는 디렉토리이다. NuxtJs는 모든 .vue파일을 읽고 애플리케이션의 라우터를 생성한다.

### plugins
루트 VueJs 애플리케이션이 생성되기 전에 실행하고 싶은 자바스크립트 플러그인을 포함하는 디렉토리이다.

### static
정적 파일들을 포함하는 디렉토리이다.

### store
Vuex Store 파일을 포함하는 디렉토리이다. Vuex Store 옵션은 NuxtJs 프레임워크에 의해 실행되며, index.js 파일을 생성하면 프레임워크가 자동으로 옵션을 활성화한다.

### test
테스트 파일을 포함하는 디렉토리이다.

