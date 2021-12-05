import { StyledControlBorder, ColumnControl } from "./styledcontrolborder";

export default function ControlBorder(props) {
  const changeProps = e => {
    switch(e.target.id) {
      case `tl`:
        props.setPropsBorder({...props.propsBorder, radius:{...props.propsBorder.radius, tl: e.target.value}})
      break
      case `tr`:
        props.setPropsBorder({...props.propsBorder, radius:{...props.propsBorder.radius, tr: e.target.value}})
      break
      case `br`:
        props.setPropsBorder({...props.propsBorder, radius:{...props.propsBorder.radius, br: e.target.value}})
      break
      case `bl`:
        props.setPropsBorder({...props.propsBorder, radius:{...props.propsBorder.radius, bl: e.target.value}})
      break
    }
  }
  return <StyledControlBorder>
    <h3>Radius</h3>
    <ColumnControl>
      <div>
        <label htmlFor="tl">T L</label>
        <input type="number" id="tl" max="100" onChange={e => changeProps(e)} />
      </div>
      <div>
        <label htmlFor="tr">T R</label>
        <input type="number" id="tr" max="100" onChange={e => changeProps(e)} />
      </div>
      <div>
        <label htmlFor="br">B R</label>
        <input type="number" id="br" max="100" onChange={e => changeProps(e)} />
      </div>
      <div>
        <label htmlFor="bl">B L</label>
        <input type="number" id="bl" max="100" onChange={e => changeProps(e)} />
      </div>
    </ColumnControl>
  </StyledControlBorder>
}