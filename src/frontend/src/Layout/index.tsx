import React from "react";
import { ReactNode } from "react";
import { Box } from "@mui/system";
import { div$html } from "../prefabs/HTML";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) =>{
    return <Box sx={{
        backgroundColor: "#5ACCCC",
        display: "flex",
        flexDirection:{
            xs:"column",
            lg:"row"
        },
        color:"white",
        padding:3,
        gap: 3,
        overflowY: "hidden",
        height: "100vh"
    }}>
        
    </Box>;

    
};

export default Layout;