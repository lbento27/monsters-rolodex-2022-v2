//import { Component } from "react";
import "./search-box.styles.css";

//typeScript
import { ChangeEventHandler } from "react";

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  //func: (a: string)=> void
  onChangeHandler : ChangeEventHandler<HTMLInputElement>;
}
//typescript

const SearchBox = ({ onChangeHandler, placeholder, className } : SearchBoxProps) => {
  //const { onChangeHandler, placeholder, className } = this.props;

  return (
    <div>
      <input
        className={`search-box ${className}`}
        type="search"
        placeholder={placeholder}
        onChange={onChangeHandler}
      />
    </div>
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onChangeHandler, placeholder, className } = this.props;

//     return (
//       <div>
//         <input
//           className={`search-box ${className}`}
//           type="search"
//           placeholder={placeholder}
//           onChange={onChangeHandler}
//         />
//       </div>
//     );
//   }
// }

export default SearchBox;
