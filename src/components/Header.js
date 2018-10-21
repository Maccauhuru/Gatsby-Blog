import React from 'react';
import { StaticQuery , graphql} from 'gatsby';
const headerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'avenir,arial,comic-sans'
}
const paragraphStyle = {
    marginTop: 0,
    opacity: 0.5
}

const TitleAndDescription=({data})=>{
const  {title,description} = data.site.siteMetadata;
return(<div style={headerStyle}>
    <h2 style={{marginBottom:0}}>{title}</h2>
    <p style={paragraphStyle}>{description}</p>
    </div>
)
}

const Header=()=>{
    return(
        <StaticQuery
        query={graphql `
        query {
            site {
                siteMetadata {
                    title
                    description
                }
            }      
        }
        `}
        render={data=> <TitleAndDescription data={data}/>}
        /> 
    )
}

export default Header;