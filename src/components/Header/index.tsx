import * as React from "react";
import * as Styles from "./index.styles";
import Nav from "../Nav";
import CartIcon from "../CartIcon";
function Header() {
  return (
    <React.Fragment>
      <Styles.PageHeaderContainer>
        <Styles.HeaderFlexContainer>
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="185"
              height="32"
              fill="none"
              role="img"
              aria-label="Shop With Us logo placed in the header of the webpage"
            >
              <title>Shop With Us logo</title>
              <path fill="#FF5000" d="M0 6a6 6 0 1 1 12 0A6 6 0 1 1 0 6Z" />
              <path fill="#00AFFF" d="M13 0h12v12H13V0Z" />
              <path fill="#FF5000" d="M13 21a6 6 0 0 1 12 0 6 6 0 0 1-12 0Z" />
              <path fill="#00AFFF" d="M0 15h12v12H0V15Z" />
              <path
                fill="#000"
                d="M37.395 22.547c0-.305-.055-.59-.165-.856a2.032 2.032 0 0 0-.527-.75 4.053 4.053 0 0 0-1.008-.62 8.913 8.913 0 0 0-1.523-.54c-.945-.258-1.777-.57-2.496-.937-.711-.367-1.293-.77-1.746-1.207a4.592 4.592 0 0 1-1.032-1.453 4.376 4.376 0 0 1-.34-1.735c0-.719.153-1.37.458-1.957a4.482 4.482 0 0 1 1.265-1.5 5.835 5.835 0 0 1 1.91-.949 8.073 8.073 0 0 1 2.391-.34c.89 0 1.703.129 2.438.387a5.765 5.765 0 0 1 1.91 1.078 5 5 0 0 1 1.242 1.664c.297.64.445 1.344.445 2.11h-3.21a3.246 3.246 0 0 0-.212-1.055 2.26 2.26 0 0 0-.527-.832 2.504 2.504 0 0 0-.902-.528c-.352-.132-.766-.199-1.243-.199a3.86 3.86 0 0 0-1.171.164 2.521 2.521 0 0 0-.856.434 2.003 2.003 0 0 0-.539.691 2.014 2.014 0 0 0-.176.844c0 .32.078.61.235.867.164.258.398.488.703.692a5.56 5.56 0 0 0 1.101.574c.438.172.93.332 1.477.48.586.164 1.144.363 1.676.598.53.234 1.02.504 1.465.808a6.061 6.061 0 0 1 1.605 1.747c.398.664.598 1.43.598 2.296 0 .75-.153 1.418-.457 2.004a4.223 4.223 0 0 1-1.243 1.465c-.53.406-1.164.715-1.898.926a8.99 8.99 0 0 1-2.402.305 8.791 8.791 0 0 1-2.532-.375 6.572 6.572 0 0 1-2.168-1.125 5.536 5.536 0 0 1-1.394-1.711c-.336-.657-.504-1.426-.504-2.309h3.234c.016.516.106.957.27 1.324.164.367.394.668.691.903a2.78 2.78 0 0 0 1.043.515c.414.11.867.164 1.36.164.437 0 .824-.05 1.16-.152.343-.102.633-.242.867-.422.234-.18.414-.394.539-.644.125-.258.188-.54.188-.844ZM46.324 16.066c.164-.242.344-.464.54-.668.202-.21.413-.394.632-.55.336-.243.707-.43 1.113-.563a4.12 4.12 0 0 1 1.29-.2c.663 0 1.273.102 1.828.306a3.566 3.566 0 0 1 1.43.925c.398.422.706.965.925 1.63.227.656.34 1.448.34 2.378V27h-3.258v-7.7c0-.452-.059-.843-.176-1.171a1.93 1.93 0 0 0-.48-.797 1.909 1.909 0 0 0-.762-.445 3.106 3.106 0 0 0-1.008-.153c-.289 0-.558.028-.808.082-.25.055-.477.137-.68.247-.188.093-.36.207-.516.34a3.188 3.188 0 0 0-.41.445V27h-3.258V9h3.258v7.066ZM57.035 20.543c0-.922.133-1.773.399-2.555a5.837 5.837 0 0 1 1.172-2.05 5.347 5.347 0 0 1 1.863-1.36c.742-.328 1.59-.492 2.543-.492.953 0 1.8.164 2.543.492a5.438 5.438 0 0 1 1.886 1.36 5.939 5.939 0 0 1 1.16 2.05A7.89 7.89 0 0 1 69 20.543v.246c0 .93-.133 1.79-.398 2.578a5.958 5.958 0 0 1-1.16 2.04 5.32 5.32 0 0 1-1.876 1.359c-.742.32-1.586.48-2.53.48-.954 0-1.806-.16-2.556-.48a5.32 5.32 0 0 1-1.874-1.36 5.855 5.855 0 0 1-1.172-2.039 8.036 8.036 0 0 1-.399-2.578v-.246Zm3.258.246c0 .531.05 1.031.152 1.5.102.461.262.863.48 1.207.22.352.5.629.845.832.351.203.773.305 1.265.305.477 0 .887-.102 1.23-.305.344-.203.626-.48.844-.832.211-.344.368-.746.47-1.207.1-.469.152-.969.152-1.5v-.246c0-.516-.051-1.004-.153-1.465a4.041 4.041 0 0 0-.469-1.219 2.456 2.456 0 0 0-.843-.832c-.344-.203-.762-.304-1.254-.304-.485 0-.899.101-1.242.304-.344.203-.626.48-.844.832a3.859 3.859 0 0 0-.48 1.22c-.102.46-.153.948-.153 1.464v.246ZM71.941 31.875V14.32h3.012l.117 1.242c.172-.21.36-.398.563-.562a3.73 3.73 0 0 1 .656-.445c.281-.149.59-.262.926-.34a4.532 4.532 0 0 1 1.101-.13c.805 0 1.516.157 2.133.47a4.313 4.313 0 0 1 1.559 1.3c.422.57.738 1.254.949 2.051.219.79.328 1.664.328 2.625v.246c0 .922-.11 1.778-.328 2.567-.21.789-.523 1.468-.938 2.039a4.559 4.559 0 0 1-1.558 1.36c-.617.327-1.324.491-2.121.491-.422 0-.813-.047-1.172-.14a3.858 3.858 0 0 1-.984-.387c-.18-.11-.352-.23-.516-.363a4.183 4.183 0 0 1-.469-.446v5.977h-3.258Zm8.086-11.344c0-.531-.05-1.027-.152-1.488a3.875 3.875 0 0 0-.445-1.219 2.39 2.39 0 0 0-.809-.797c-.32-.195-.71-.293-1.172-.293-.265 0-.508.028-.726.082a2.353 2.353 0 0 0-.598.211c-.203.11-.383.246-.54.41a2.552 2.552 0 0 0-.386.575v5.297c.102.203.223.386.364.55.148.164.316.305.503.422.18.11.387.196.621.258.235.055.497.082.786.082.46 0 .851-.101 1.171-.305.329-.203.594-.48.797-.832.203-.351.352-.757.446-1.218.094-.47.14-.965.14-1.489v-.246ZM93.719 27 91.375 9.937h3.012l1.136 9.54.083.668.105-.704 1.348-9.503h2.355l1.43 9.574.105.703.082-.715 1.16-9.563h3.024L102.848 27h-2.977l-1.488-9.21-.13-.868-.128.867L96.695 27H93.72ZM108.004 14.32h6.902v10.032h3.434V27h-10.336v-2.648h3.609V16.98h-3.609v-2.66Zm3.375-3.246c0-.25.043-.48.129-.691.094-.219.222-.406.387-.563.164-.148.359-.265.585-.351.235-.086.493-.13.774-.13.578 0 1.035.165 1.371.493.344.32.516.734.516 1.242s-.172.926-.516 1.254c-.336.32-.793.48-1.371.48a2.24 2.24 0 0 1-.774-.128 1.725 1.725 0 0 1-.585-.364 1.576 1.576 0 0 1-.387-.539 1.904 1.904 0 0 1-.129-.703ZM127.527 11.215v3.105h4.735v2.403h-4.735v5.449c0 .46.051.848.153 1.16.109.305.261.547.457.727.195.187.429.32.703.398.281.078.594.117.937.117.25 0 .504-.012.762-.035.266-.023.52-.055.762-.094a11.557 11.557 0 0 0 1.195-.222l.316 2.238c-.226.133-.492.25-.796.352a8.463 8.463 0 0 1-.973.234c-.344.062-.703.11-1.078.14-.367.04-.731.06-1.09.06-.695 0-1.328-.09-1.898-.27a3.698 3.698 0 0 1-1.442-.868c-.406-.382-.719-.87-.937-1.465-.219-.601-.328-1.32-.328-2.156v-5.765h-2.895V14.32h2.895v-3.105h3.257ZM139.223 16.066a4.98 4.98 0 0 1 .539-.668 4.54 4.54 0 0 1 .633-.55c.335-.243.707-.43 1.113-.563.406-.133.836-.2 1.289-.2.664 0 1.273.102 1.828.306a3.57 3.57 0 0 1 1.43.925c.398.422.707.965.925 1.63.227.656.34 1.448.34 2.378V27h-3.258v-7.7c0-.452-.058-.843-.175-1.171a1.937 1.937 0 0 0-.481-.797 1.913 1.913 0 0 0-.761-.445 3.107 3.107 0 0 0-1.008-.153c-.289 0-.559.028-.809.082a2.61 2.61 0 0 0-.68.247 2.562 2.562 0 0 0-.515.34 3.156 3.156 0 0 0-.41.445V27h-3.258V9h3.258v7.066ZM170.043 9.938l.012 11.308c0 .953-.133 1.8-.399 2.543-.258.742-.633 1.367-1.125 1.875-.5.516-1.109.906-1.828 1.172-.711.266-1.523.398-2.437.398-.86 0-1.637-.132-2.332-.398a4.873 4.873 0 0 1-1.77-1.16c-.492-.508-.875-1.133-1.148-1.875-.266-.75-.399-1.602-.399-2.555l.012-11.308h3.293l.012 11.308c.007.57.062 1.07.164 1.5.109.43.269.785.48 1.067.195.257.434.453.715.585.281.125.605.188.973.188.398 0 .75-.066 1.054-.2.313-.14.571-.347.774-.62.218-.282.383-.633.492-1.055.109-.422.168-.91.176-1.465l.011-11.308h3.27ZM181.387 23.52a.943.943 0 0 0-.141-.516c-.086-.149-.242-.29-.469-.422a4.817 4.817 0 0 0-.925-.352c-.383-.109-.868-.218-1.454-.328a14.84 14.84 0 0 1-2.039-.55 6.46 6.46 0 0 1-1.57-.82 3.682 3.682 0 0 1-1.031-1.09c-.242-.415-.363-.891-.363-1.43 0-.524.125-1.024.375-1.5.25-.477.609-.895 1.078-1.254.468-.36 1.039-.645 1.711-.856.671-.21 1.429-.316 2.273-.316.883 0 1.676.105 2.379.316.703.204 1.301.485 1.793.844.484.367.855.8 1.113 1.3a3.5 3.5 0 0 1 .387 1.63h-3.258a1.6 1.6 0 0 0-.105-.586 1.491 1.491 0 0 0-.317-.504c-.195-.195-.461-.352-.797-.469-.328-.117-.726-.176-1.195-.176-.398 0-.746.04-1.043.118a2.092 2.092 0 0 0-.727.328 1.358 1.358 0 0 0-.398.445 1.12 1.12 0 0 0-.129.527c0 .188.039.364.117.528.078.156.219.297.422.422.196.132.465.253.809.363a9.79 9.79 0 0 0 1.312.27 17.18 17.18 0 0 1 2.133.48 6.671 6.671 0 0 1 1.699.75 3.51 3.51 0 0 1 1.114 1.137c.273.437.41.96.41 1.57 0 .562-.137 1.082-.41 1.558a3.74 3.74 0 0 1-1.137 1.22c-.5.343-1.102.613-1.805.808-.703.187-1.488.281-2.355.281-.953 0-1.797-.125-2.532-.375-.726-.25-1.335-.578-1.828-.984a4.194 4.194 0 0 1-1.125-1.36 3.518 3.518 0 0 1-.375-1.547h3.106c.023.344.117.641.281.891.164.242.375.438.633.586.258.156.551.27.879.34.336.07.679.105 1.031.105.422 0 .789-.035 1.102-.105.32-.078.582-.18.785-.305.195-.125.34-.27.433-.433.102-.165.153-.344.153-.54Z"
              />
            </svg>
          </section>
          <Styles.PageLinkNavigationContainer>
            <Nav />
          </Styles.PageLinkNavigationContainer>
          <Styles.CartIconContainer>
            <Styles.MobileHamburgerNavigationContainer>
              <i
                className="fa-solid fa-bars fa-2xl"
                role="img"
                aria-label="Hamburger symbol the user can push click to get into the menu when the user are on mobile or tablet format"
              ></i>
            </Styles.MobileHamburgerNavigationContainer>
            <CartIcon />
          </Styles.CartIconContainer>
        </Styles.HeaderFlexContainer>
      </Styles.PageHeaderContainer>
    </React.Fragment>
  );
}
export default Header;
