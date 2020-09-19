import React, { useState } from "react";
import { IoMdSearch, IoIosClose } from "react-icons/io"
import { useDispatch } from "react-redux";
import { setInputValue } from "../../redux/actions/input"
import {
    SearchBox,
    CloseSearch,
    Input,
    SearchButton
} from "./style";
const SearchInput = () => {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");
    const [searchAnim, setSearchAnim] = useState({ hover: false, focus: false })


    const { hover, focus } = searchAnim
    return (
        <SearchBox focus={focus} hover={hover}>
            {hover && <CloseSearch
                onClick={() => {
                    setInput("")
                    setSearchAnim({ hover: false, focus: false })
                }}
                hover={hover}>
                <IoIosClose />
            </CloseSearch>}

            <Input
                onChange={({ target }) => setInput(target.value)}
                onClick={() => setSearchAnim({ ...searchAnim, focus: true })}
                onMouseEnter={() => { setSearchAnim({ ...searchAnim, hover: true }) }}
                value={input}
            />

            <SearchButton

                onClick={() => {
                    setInput("")
                    dispatch(setInputValue(input))
                }}
                onMouseOver={() => setSearchAnim({ ...searchAnim, hover: true })}
            >
                <IoMdSearch />
            </SearchButton>
        </SearchBox>

    );
};

export default SearchInput;
