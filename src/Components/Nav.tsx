function Nav() {

  return (
    <nav style={styles.nav}>
        <div style={{...styles.navChild, ...styles.statusBar}}><h2 style={styles.statusBarH1}></h2></div>
        <div style={{...styles.navChild, ...styles.header}}><h1>Appointify</h1></div>
        <div style={{...styles.navChild,}}></div>
    </nav>
  )
}

const styles = {
    nav : {
        backgroundColor: "#060809",
        height: "50px",
        width: "100%",
        display: "flex",
    },
    navChild: {
        flex: "1",
    },
    header: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    statusBar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "baseline",
        overflow: "hidden",
    },
    statusBarH1: {
        marginLeft: "10px",
        textWrap: "nowrap",
        fontWeight: "600",
        fontSize: "18px",
    }

}

export default Nav
