import React from "react";
import Searchtab from "./searchtab";
import searchtab from "./searchtab"
const Nav = () => (
    <nav class="navbar navbar-expand-md navbar-dark bg-primary">
    <div class="d-flex w-50 order-0">
        <a class="navbar-brand mr-1" >Employee Directory</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
    </div>
    <div class="navbar-collapse collapse justify-content-center order-2" id="collapsingNavbar">
    <button type="button">Alphabetical Order</button>
    <button type="button">sort by 10</button>
    <button type="button">sort by 100</button>
    </div>
    <Searchtab></Searchtab>
    <span class="navbar-text small text-truncate mt-1 w-50 text-right order-1 order-md-last">always show</span>
</nav>
)

export default Nav;