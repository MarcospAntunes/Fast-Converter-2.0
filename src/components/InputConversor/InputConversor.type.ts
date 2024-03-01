import { ChangeEventHandler } from "react"
import { DefaultTheme } from "styled-components"

type InputConversorProps = {
    type: string
    accept: string | undefined
    name: string
    id: string
    placeholder?: string
    required: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    value: any
    theme?: DefaultTheme | undefined
}

export default InputConversorProps;