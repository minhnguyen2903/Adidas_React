import Icon from '@material-ui/core/Icon';
import styles from "../../asserts/style/myButton.module.css"

export const ButtonActive = (props:any) => {
    return (
        <div className={`${styles.button_active}`} style={props.style}>
        <button onClick={props.action} className={`w-100 d-flex justify-content-between cursor-pointer ${styles.transition_button}`} disabled = {props.disabled}>
            <span className="text-uppercase text-700 letter-spacing">{props.text}</span><Icon>east</Icon>
        </button>
        </div>
    )
}

export const ButtonHover = (props:any) => {
    return (
        <div className={`${styles.button_hover}`} style={props.style}>
        <button className="w-100 d-flex justify-content-between">
            <span className="text-uppercase text-700 letter-spacing">{props.text}</span><Icon>east</Icon>
        </button>
        </div>
    )
}

export const ButtonActiveLight = (props:any) => {
    return (
        <div className={`${styles.button_active} ${styles.button__light}`}>
        <button>
            <span className="text-uppercase text-700 letter-spacing">{props.text}</span><Icon>east</Icon>
        </button>
        </div>
    )
}