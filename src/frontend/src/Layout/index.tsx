import React from "react";
import { ReactNode } from "react";
import { Box } from "@mui/system";
import { div$html } from "../prefabs/HTML";
import SideBar from "../components/sidebar";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) =>{
    return <Box sx={{
        backgroundColor: "#FFFFFF",
        display: "flex",
        flexDirection:{
            xs:"column",
            lg:"row"
        },
        color:"black",
        padding:3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh"
    }}>
        <SideBar/>
        <Box sx={{width: "100%", overflowY: "scroll"}}>{children}</Box>
    </Box>;

    
};

export default Layout;