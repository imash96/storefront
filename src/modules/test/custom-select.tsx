import { useEffect, useRef, useState } from "react"
import "@styles/select.css"
import useToggleState from "@libs/hooks/use-toggle-state";

type OptionProp = {
    label: string;
    value: string;
}

type CustomSelectProp = {
    placeHolder: string,
    options: OptionProp[],
    defaultValue?: OptionProp
    disabled?: boolean
    checkbox?: boolean
    isSearchable?: boolean,
    onChange: (newValue: OptionProp) => void,
    align?: string
}

export default function CustomSelect({ placeHolder, options, defaultValue, isSearchable, onChange, align, ...prop }: CustomSelectProp) {
    // const [showMenu, setShowMenu] = useState<boolean>(false);
    const { state: showMenu, open, close, toggle } = useToggleState()
    const [selectedValue, setSelectedValue] = useState<OptionProp | undefined>(defaultValue);
    const [searchValue, setSearchValue] = useState("");
    const searchRef = useRef<HTMLInputElement | null>(null);
    const inputRef = useRef<HTMLDivElement | null>(null);

    const handler = (e: MouseEvent) => {
        if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
            close()
        }
    };

    const handleInputClick = () => {
        toggle()
    };

    useEffect(() => {
        setSearchValue("");
        if (showMenu && searchRef.current) {
            searchRef.current.focus();
        }
    }, [showMenu]);

    useEffect(() => {
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const getDisplay = () => {
        if (!selectedValue)
            return placeHolder;
        return selectedValue.label;
    };

    const onItemClick = (option: OptionProp) => {
        setSelectedValue(option);
        isSelected
    };

    const isSelected = (option: OptionProp) => {
        if (!selectedValue) {
            return false;
        }

        return selectedValue.value === option.value;
    };

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const getOptions = () => {
        if (!searchValue) {
            return options;
        }

        return options.filter((option) => option.label.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
    };

    return (
        <div className="custom--dropdown-container">

            <div ref={inputRef} onClick={handleInputClick} className="dropdown-input">
                <div className={`dropdown-selected-value ${!selectedValue ? 'placeholder' : ''}`}>{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                        <Icon isOpen={showMenu} />
                    </div>
                </div>
            </div>

            {
                showMenu && (
                    <div className={`dropdown-menu alignment--${align || 'auto'}`}>
                        {
                            isSearchable && (
                                <div className="search-box">
                                    <input className="form-control" onChange={onSearch} value={searchValue} ref={searchRef} />
                                </div>
                            )
                        }
                        {
                            getOptions().map((option) => (
                                <div onClick={() => onItemClick(option)} key={option.value} className={`dropdown-item ${isSelected(option) && "selected"}`} >
                                    {option.label}
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

// Icon component
const Icon = ({ isOpen }: { isOpen: boolean }) => {
    return (
        <svg viewBox="0 0 24 24" width="18" height="18" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" className={isOpen ? 'translate' : ''}>
            <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
    );
};