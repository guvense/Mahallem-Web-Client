import React  from 'react';
// const CustomIcon = (props) => {
   
//     switch (props.name) {
//         case "bookmarker":
//       return (
//         <svg width={props.width} height={props.height}  style={props.style} viewBox="0 0 41 26" fill="none" xmlns="http://www.w3.org/2000/svg">
//         <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 1 26)" stroke="#43A4F3" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 11 26)" stroke="#FFB00A" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
//         <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 21 26)" stroke="#E773B7" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
//         </svg>
//       )
    
//    };
//   }
//    export default CustomIcon;


const getViewBox = name => {
  switch (name) {
    case "bookmarker":
      return "0 0 41 26";
    case "plus-button":
      return "0 0 52 52";
    default:
      return "0 0 32 32";
  }
};

   const getPath = (name, props) => {
    switch (name) {
      case "bookmarker":
        return (
          <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill={props.fill} xmlns="http://www.w3.org/2000/svg">
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 1 26)" stroke="#43A4F3" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 11 26)" stroke="#FFB00A" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 21 26)" stroke="#E773B7" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        )
        case "plus-button":
          return (
            <svg  width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill={props.fill} xmlns="http://www.w3.org/2000/svg">
            <circle cx="26" cy="26" r="26" fill="white"/>
            <path d="M25.8803 2.88889V49.1111M2.88892 26.651H49.1111" stroke="#0275D8" stroke-width="4" stroke-linecap="round"/>
            <circle cx="26" cy="26" r="25.5" stroke="#C4C4C4" stroke-opacity="0.63"/>
            </svg>
          )
  

      default:
        return <path />;
    }
  };

  const CustomIcon = ({
    name = "",
    style = {},
    fill = "none",
    viewBox = "",
    width = "100%",
    className = "",
    height = "100%"
  }) => (
    <svg
      width={width}
      style={style}
      height={height}
      className={className}
      viewBox={viewBox || getViewBox(name)}  
    >
      {getPath(name, { fill })}
    </svg>
  );
  
  export default CustomIcon;