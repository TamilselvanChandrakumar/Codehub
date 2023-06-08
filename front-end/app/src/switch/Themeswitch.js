import React from 'react'
import Form from 'react-bootstrap/Form';
import './Themeswitch.css'
import { UseThemeContext } from '../hooks/UseThemeContext';
export default function Themeswitch() {
const {theme,dispatch}=UseThemeContext()
    const switchtheme=()=>{
        
        if(theme==='light'){
            dispatch({type:"DARK"})
        }
        else if(theme==='dark'){
            dispatch({type:"LIGHT"})
        }
        console.log(theme);
    }
  return (
    <Form className='switch' onClick={switchtheme}>
    <Form.Check // prettier-ignore
      type="switch"
      id="custom-switch"
    />
      </Form>
  )
}
