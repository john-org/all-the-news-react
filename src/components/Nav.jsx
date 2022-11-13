import React from "react";
import NavItem from "./NavItem";

// Img with encoded SVG and applied style (option1)
// const encodedSvgStyles = "fill='white'";
export const Logo = ({ encodedSvgStyles }) => (
  <img
    // style={svgStyles}
    src={`
      data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8' standalone='no'%3F%3E%3Csvg width='256px' ${encodedSvgStyles} height='188px' viewBox='0 0 256 188' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' preserveAspectRatio='xMidYMid'%3E%3Cg%3E%3Cpath d='M244.675204,104.605355 C237.22468,95.3667056 227.837021,89.257276 216.214203,86.5750874 C219.790454,81.0616997 221.727591,74.9522702 221.727591,68.2467987 C221.727591,58.8591385 218.44936,50.8125728 211.743888,44.1071013 C205.038417,37.4016298 196.991852,34.1233993 187.60419,34.1233993 C179.110593,34.1233993 171.809081,36.8055879 165.55064,42.3189756 C160.335274,29.5040745 151.990688,19.2223516 140.36787,11.4738068 C128.894063,3.87427241 116.228172,0 102.370198,0 C83.4458673,0 67.3527358,6.70547148 54.0908033,19.967404 C40.8288708,33.2293365 34.1233993,49.322468 34.1233993,68.2467987 C34.1233993,69.4388825 34.2724098,71.3760187 34.4214203,73.9091969 C23.9906869,78.8265425 15.6461001,86.1280559 9.38766007,95.9627475 C3.12922003,105.648429 0,116.377183 0,127.85099 C0,144.242143 5.81140862,158.398138 17.5832364,170.020955 C29.2060536,181.643772 43.3620489,187.60419 59.7532014,187.60419 L204.740397,187.60419 C218.896392,187.60419 230.96624,182.537835 240.949942,172.554133 C250.933643,162.570431 256,150.500582 256,136.344587 C255.850989,124.572759 252.125728,113.993015 244.675204,104.605355 L244.675204,104.605355 L244.675204,104.605355 Z M200.717113,187.60419 L179.557626,187.60419 L172.405122,165.25262 L131.12922,165.25262 L123.976717,187.60419 L102.817229,187.60419 L140.963912,81.2107101 L162.570431,81.2107101 L200.717113,187.60419 L200.717113,187.60419 L200.717113,187.60419 Z M136.493598,148.265424 L167.040745,148.265424 L151.841677,100.284051 L136.493598,148.265424 L136.493598,148.265424 Z' %3E%3C/path%3E%3C/g%3E%3C/svg%3E%0A `}
    alt="logo"
  />
);

const Nav = ({ navItems, setSection, section }) => {
  // The technique below works for the style of the img, but does not work for the SVG.
  // The img style does not have a CSS property 'fill'
  // const svgStyles = {
  //   fill: "white",
  // };
  // instead I am passing a string as follows to be used inside the SVG encoded data
  const encodedSvgStyles = "fill='white'";

  return (
    <nav>
      <ul>
        <li className="logo">
          {/* <a href="#top"> */}
          {/* Below, I am linking to the top of the page but without changing the hash (as done by #top) */}
          <a href={`#${section}`} onClick={() => window.scrollTo(0, 0)}>
            {/* This uses a file for the src */}
            {/* <img style={svgStyles} src="img/logo.svg" alt="logo"></img> */}

            {/* This uses an encoded SVG for the src */}
            <Logo encodedSvgStyles={encodedSvgStyles} />
          </a>
        </li>

        {navItems.map((navItem, index) => (
          <NavItem
            key={index}
            navItem={navItem}
            setSection={setSection}
            section={section}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
