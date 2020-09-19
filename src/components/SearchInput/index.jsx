import React, { useState } from "react";
import { IoMdSearch, IoIosClose } from "react-icons/io"
import {
    SearchBox,
    CloseSearch,
    Input,
    SearchButton
} from "./style";
const SearchInput = () => {
    const [searchAnim, setSearchAnim] = useState({ hover: false, focus: false })

    const { hover, focus } = searchAnim
    return (
        <SearchBox focus={focus} hover={hover}>
            {hover && <CloseSearch
                onClick={() => {
                    setSearchAnim({ hover: false, focus: false })
                }}
                hover={hover}>
                <IoIosClose />
            </CloseSearch>}

            <Input
                onClick={() => setSearchAnim({ ...searchAnim, focus: true })}
                onMouseEnter={() => { setSearchAnim({ ...searchAnim, hover: true }) }}
            />

            <SearchButton
                onClick={() => { console.log("Funcionou") }}
                onMouseOver={() => setSearchAnim({ ...searchAnim, hover: true })}
            >
                <IoMdSearch />
            </SearchButton>
        </SearchBox>

    );
};

export default SearchInput;
