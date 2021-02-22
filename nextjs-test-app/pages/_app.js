import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
/**
 페이지 전환 시 레이아웃을 유지.
 페이지 전환 시 상태값을 유지.
 componentDidCatch를 이용하여 커스텀 에러를 핸들링 가능
 추가적인 데이터를 페이지로 주입시켜 주는게 가능
 글로벌 CSS를 이곳에 선언
 
 **/ 
