import PropTypes from "prop-types"
import { Title } from "./styles"

function DefaultTitle ({children, theme, ...props}) {

    console.log(props)
    return (
        <Title {...props} theme={theme}>{children}</Title>
    )
}

DefaultTitle.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
}

export default DefaultTitle

