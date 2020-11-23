import React from 'react';
import './Palette.css';

const Color=({color, active, onClick})=>{
    return(
        <div className={`color-data ${active ? 'active':''}`} style={{background:color}} onClick={onClick}></div>
    )

}

const Palette=({colors, selected, onSelect})=>{

    const colorList = colors.map(
        (lalala)=>(<Color color={lalala} active={selected===lalala} onClick={()=>onSelect(lalala)} key={lalala}/>)
    );

    return(
        <div className="color-list">
            {colorList}
        </div>
    )
}

export default Palette;