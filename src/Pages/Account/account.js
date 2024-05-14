import React from "react";
import { FaSearch } from "react-icons/fa";
import LayoutComponent from "../../Components/LayoutComponentUsual/layoutComponent";
import LayoutFilter from "../../Components/LayoutFilter/layoutFilter";

function Account(){
    return(
        <LayoutComponent title="Contas a Pagar">
            <LayoutFilter>
                <div className="wrap-search">
                    <input type="search" />
                    <FaSearch />
                </div>

                <button>Ola</button>
            </LayoutFilter>
        </LayoutComponent>
    )
}

export default Account