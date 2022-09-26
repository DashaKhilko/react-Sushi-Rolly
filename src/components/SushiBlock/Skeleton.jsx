import ContentLoader from 'react-content-loader';

function Skeleton () {
    return(
        <ContentLoader 
        className="sushi-block"
        speed={2}
        width={280}
        height={425}
        viewBox="0 0 280 425"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
      >
        <rect x="0" y="30" rx="30" ry="30" width="280" height="170" />
        <rect x="25" y="208" rx="0" ry="0" width="230" height="15" />  
        <rect x="25" y="246" rx="0" ry="0" width="230" height="40" />  
        <rect x="0" y="310" rx="10" ry="10" width="280" height="47" /> 
        <rect x="0" y="382" rx="0" ry="0" width="100" height="30" /> 
        <rect x="130" y="375" rx="20" ry="20" width="150" height="45" />
      </ContentLoader>
    )
}

export default Skeleton;