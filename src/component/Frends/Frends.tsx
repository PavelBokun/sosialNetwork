import { FrendsDataType, RootStateType } from "../../redux/state"

export const Frends=(props:FrendsDataType)=>{
return(
    <div>
        <p>Frends</p>
        {props.frends.map(el=>el.faise)}
    </div>
)
}
