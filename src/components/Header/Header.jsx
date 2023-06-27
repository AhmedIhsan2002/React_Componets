// const Header = () =>{
//     return <div>React-js</div>
// }

// export default Header

import React  from "react";
import "./Header.css"
class Header extends React.Component{
    render(){
        return(
            <header>
                <h1>hedaer_tag</h1>
                <form>
                    <label htmlFor="name">
                        UserNme:
                        <input type="text" id="name" />
                    </label>
                </form>
            </header>
        )
    }
}

export default Header