import React, {useState, useEffect} from "react";
import classNames from "classnames";
import "./navigation.scss";

export const Navigation = ({handleChange = () => {}}) => {
    const items = Array.from({length: 200}, (_, i) => i + 1);
    const [group, setGroup] = useState(0);
    const [activeItem, setActiveItem] = useState(1);

    const Item = ({value, index}) => {
        const active = activeItem === index;
        const onClick = () => setActiveItem(index);
        return <div className={classNames("navigation-item", {active})}
                    onClick={onClick}
                    key={index}>
            {value}
        </div>;
    }


    useEffect(() => {
        if (group < 0) {
            setGroup(0);
        }
        if (activeItem < 1) {
            setActiveItem(1)
        }
    }, [group, activeItem]);

    useEffect(() => {
        if (activeItem > (group + 1) * 10) {
            setGroup(group + 1);
        }

        if (activeItem < group * 10) {
            setGroup(group - 1);
        }
        handleChange(activeItem);
    }, [activeItem]);

    return <div className={"navigation"}>
        <Item index={activeItem-1} value={"<"}/>
        {items.slice(group * 10,(group + 1) * 10).map((item, index) => <Item value={item} index={item} key={index}/>)}
        <Item index={activeItem+1} value={">"}/>
    </div>
}