import React  from 'react';


const getViewBox = name => {
  switch (name) {
    case "bookmarker":
      return "0 0 41 26";
    case "plus-button":
      return "0 0 52 52";
    case "create-task":
      return "0 0 31 38";
    case "user":
      return "0 0 205 297";
    case "empty-user":
      return "0 0 24 24";
    default:
      return "0 0 32 32";
  }
};
const colors = ["#0275D8", "#D82222", "#FFB00A", "#43A4F3", "#FFB00A","#FFB303","#FF71A7"]

   const getPath = (name, props) => {
    switch (name) {
      case "bookmarker":
        return (
          <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 1 26)" stroke="#43A4F3" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 11 26)" stroke="#FFB00A" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          <line x1="0.542169" y1="-0.542169" x2="31.4735" y2="-0.542169" transform="matrix(0.624695 -0.780869 0.775346 0.631537 21 26)" stroke="#E773B7" stroke-width="1.08434" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        )
        case "plus-button":
          return (
            <svg  width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle id="circle" cx="26" cy="26" r="26" fill="white" />
            <path d="M25.8803 2.88889V49.1111M2.88892 26.651H49.1111" stroke="#0275D8" stroke-width="3" stroke-linecap="round"/>
            <circle cx="26" cy="26" r="25.5" stroke="#C4C4C4" stroke-opacity="0.63"/>
            </svg>
          )
        case "create-task":
          return (
            <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill="none"  xmlns="http://www.w3.org/2000/svg">
            <path d="M26.1207 38H4.7492C2.12648 38 0 35.874 0 33.2507V4.75533C0 2.13256 2.12652 0.00612657 4.7492 0.00612657H18.9968C20.5866 -0.0187842 21.2185 0.0403187 21.3715 0.0403187V0.00608283L30.87 9.50453C30.87 11.2484 30.87 11.5081 30.87 11.8791V33.2506C30.87 35.874 28.7435 38 26.1207 38ZM21.3715 2.38075C21.3715 5.20814 21.3715 7.12995 21.3715 7.12995C21.3715 8.44133 22.4347 9.50457 23.7462 9.50457H28.4954L21.3715 2.38075ZM28.4953 11.8792C25.73 11.8792 23.7461 11.8792 23.7461 11.8792C21.1221 11.8792 18.9968 9.75324 18.9968 7.12995C18.9968 7.12995 18.9424 5.22373 18.9632 2.38075H4.74916C3.43782 2.38075 2.37453 3.44394 2.37453 4.75533V33.2507C2.37453 34.5621 3.43782 35.6252 4.74916 35.6252H26.1207C27.432 35.6252 28.4953 34.5621 28.4953 33.2507V11.8792H28.4953ZM25.8068 28.5048L12.5853 28.4988C11.9774 28.4985 11.4837 27.9666 11.484 27.311C11.4843 26.6553 11.9785 26.1238 12.5864 26.1241L25.8078 26.1302C26.4157 26.1305 26.9093 26.6624 26.909 27.318C26.9088 27.9737 26.4146 28.5052 25.8068 28.5048ZM25.81 21.381L12.5886 21.375C11.9807 21.3746 11.487 20.8428 11.4874 20.1871C11.4876 19.5314 11.9818 18.9999 12.5897 19.0003L25.8111 19.0063C26.419 19.0066 26.9126 19.5384 26.9123 20.1942C26.912 20.8499 26.4179 21.3813 25.81 21.381ZM26.9123 14.1644C26.912 14.8201 26.4179 15.3516 25.81 15.3513L12.5885 15.3452C11.9807 15.3449 11.487 14.8131 11.4873 14.1573C11.4876 13.5016 11.9817 12.9701 12.5896 12.9705L25.8111 12.9765C26.419 12.9768 26.9126 13.5087 26.9123 14.1644ZM10.0744 13.3938L7.4404 16.0801C7.1979 16.3275 6.8048 16.3275 6.56235 16.0801L5.57463 15.0727C5.33213 14.8256 5.33213 14.4246 5.57463 14.1774C5.81704 13.93 6.21018 13.93 6.45263 14.1774L7.00137 14.737L9.19645 12.4982C9.43886 12.2509 9.83201 12.2509 10.0744 12.4982C10.3168 12.7454 10.3168 13.1465 10.0744 13.3938ZM10.0744 19.4235L7.4404 22.1099C7.1979 22.3572 6.8048 22.3572 6.56235 22.1099L5.57463 21.1024C5.33213 20.8552 5.33213 20.4542 5.57463 20.2071C5.81704 19.9597 6.21018 19.9597 6.45263 20.2071L7.00137 20.7666L9.19645 18.528C9.43886 18.2806 9.83201 18.2806 10.0744 18.528C10.3168 18.7751 10.3168 19.1762 10.0744 19.4235Z" fill="#0275D8"/>
            </svg>
            
          )

        case "pre-line":
          
          var index = 0 + Math.floor((colors.length - 1) * Math.random());

         return (
          <svg width={props.width} height={props.height} className={props.className}  style={props.style} viewBox="0 0 2 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.830566 24.467V0.927612" stroke={colors[index]} stroke-width="0.541136"/>
          </svg>
          )

        case "empty-user-with-plus":
  
           return (
            <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox="0 0 22 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse rx="7.87037" ry="8.18182" transform="matrix(-1 0 0 1 11 8.18182)" fill="#C4C4C4"/>
            <ellipse rx="10.4938" ry="14.5455" transform="matrix(-1 0 0 1 11 35.4544)" fill="#C4C4C4"/>
            <path d="M11.018 27.1844V43.2039M4.68334 35.4198H17.4186" stroke="white" stroke-width="2.06161" stroke-linecap="round"/>
            </svg>
            )


        case "empty-user":
  
            return (
              <svg width={props.width} height={props.height} className={props.className} style={props.style}  viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3ZM12 14C8.996 14 3 15.508 3 18.5V20C3 20.552 3.448 21 4 21H20C20.552 21 21 20.552 21 20V18.5C21 15.508 15.004 14 12 14Z" fill="#C4C4C4"/>
              </svg>
              )
        case "user":

          var indexfirst = 0 + Math.floor((colors.length - 1) * Math.random());
          var indexSecond = 0 + Math.floor((colors.length - 1) * Math.random());
          
          if(props.fill === undefined || props.fill === null ||  Object.keys(props.fill).length == 0) {
            
            return (
              <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="102.5" cy="72.2273" rx="34.125" ry="37.2273" fill={colors[indexfirst]} fillOpacity="0.93"/>
              <ellipse cx="102.5" cy="196.317" rx="45.5" ry="66.1818" fill={colors[indexSecond]}/>
              <path d="M204.5 148.5C204.5 189.419 193.051 226.442 174.567 253.221C156.081 280.003 130.593 296.5 102.5 296.5C74.4065 296.5 48.9188 280.003 30.433 253.221C11.9488 226.442 0.5 189.419 0.5 148.5C0.5 107.581 11.9488 70.5583 30.433 43.7787C48.9188 16.997 74.4065 0.5 102.5 0.5C130.593 0.5 156.081 16.997 174.567 43.7787C193.051 70.5583 204.5 107.581 204.5 148.5Z" stroke="#C4C4C4"/>
              </svg>    
                
              )

          }else {

            return (
              <svg width={props.width} height={props.height} className={props.className} style={props.style} viewBox={props.viewBox} fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="102.5" cy="72.2273" rx="34.125" ry="37.2273" fill={props.fill.head} fillOpacity="0.93"/>
              <ellipse cx="102.5" cy="196.317" rx="45.5" ry="66.1818" fill={props.fill.body}/>
              <path d="M204.5 148.5C204.5 189.419 193.051 226.442 174.567 253.221C156.081 280.003 130.593 296.5 102.5 296.5C74.4065 296.5 48.9188 280.003 30.433 253.221C11.9488 226.442 0.5 189.419 0.5 148.5C0.5 107.581 11.9488 70.5583 30.433 43.7787C48.9188 16.997 74.4065 0.5 102.5 0.5C130.593 0.5 156.081 16.997 174.567 43.7787C193.051 70.5583 204.5 107.581 204.5 148.5Z" stroke="#C4C4C4"/>
              </svg>    
              )
          }
            


      default:
        return <path />;
    }
  };

  const CustomIcon = ({
    name = "",
    style = {},
    fill = {},
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
      fill={fill}
    >
      {getPath(name, { fill })}
    </svg>
  );
  
  export default CustomIcon;