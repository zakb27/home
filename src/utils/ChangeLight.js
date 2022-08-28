import React,{useState} from "react";

const ChangeLight = () =>{
    const [isDark,changeLight] = useState(false);

    const switchColor = () =>{
        changeLight(!isDark);
        const el = document.querySelector(':root');
        if (!isDark){
            el.style.setProperty('--main-color','#e9f5db');
            el.style.setProperty('--secondary-color','#414833');
            el.style.setProperty('--third-color','#283618');
        }
        else{
            el.style.setProperty('--main-color','#344e41');
            el.style.setProperty('--secondary-color','#a3b18a');
            el.style.setProperty('--third-color','#dad7cd');
        }
    }

    if(isDark){
        return(<div className={'change_light_container'} onClick={switchColor}>
            <i className="uil uil-sun"></i>
        </div>);
    }
    else{
        return(<div className={'change_light_container'} onClick={switchColor}>
            <i className="uil uil-moon"></i>
        </div>);
    }

}
export default ChangeLight;