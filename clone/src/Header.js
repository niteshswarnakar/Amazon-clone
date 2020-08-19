import React from 'react'
import './Header.css'
import {Link} from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from'@material-ui/icons/ShoppingBasket';
import {useStateValue} from './StateProvider';

function Header() {
    const [{basket}] = useStateValue()
    return (
        <nav className = 'header'>
            <Link to='/'>
                <img className = 'header_logo' src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyl8cam6qA7jAv5cXo8fbNn12kOSGq0YmKsw&usqp=CAU" />
            </Link>

            <div className = "header_search">
                <input type = 'text' className = 'header_searchInput'></input>
                <SearchIcon className = 'header_searchIcon'/>
            </div>

            <div className = 'header_nav'>
                {/* 3 links for the nav bar */}
                <Link to='/login' className = 'header_link'>
                    <div class = 'header_option'>
                        <span className = 'header_optionLineOne'>Hello Nitesh</span>
                        <span class = 'header_optionLineTwo'>Sign In</span>
                    </div>
                </Link>

                <Link to='/' className = 'header_link'>
                    <div class = 'header_option'>
                        <span className = 'header_optionLineOne'>Returns</span>
                        <span class = 'header_optionLineTwo'>& orders</span>
                    </div>
                </Link>

                <Link to='/checkout' className = 'header_link'>
                    <div class = 'header_option'>
                        <span className = 'header_optionLineOne'>Your</span>
                        <span class = 'header_optionLineTwo'>Prime</span>
                    </div>
                </Link>
                {/* this is for the searchBasketIcon */}
                <Link className = 'header_basket'>
                    <ShoppingBasketIcon className = 'header_shoppingBasketIcon' />
                    <span className = 'header_cartNumber'>{basket?.length}</span>
                </Link>


            </div>
        </nav>
    )
}

export default Header
