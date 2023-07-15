import styles from './Avatar.module.css'




// eslint-disable-next-line react/prop-types
function Avatar({hesBorder = true, src}) {

    return(
        <img className={hesBorder ? styles.avatarWithBorder : styles.avatar} src={src} alt="" />
    );
}


export default Avatar;