import { Link } from "react-router-dom";
import * as React from "react";

type BgColor = "primary" | "secondary" | "success" |
               "danger" | "warning" | "info" | "light" |
               "dark" | "white";

interface HeaderProps {
    bg: BgColor;
    title: string;
    rootPath: string;
    links: { path: string; text: string }[];
}

export const Header = (props: HeaderProps) => (
    <nav className={`navbar navbar-expand-lg navbar-light bg-${props.bg}`}>
        <Link className="navbar-brand" to={props.rootPath}>
            {props.title}
        </Link>
        <ul className="navbar-nav">
            {
                props.links.map((link, linkIndex) => (
                    <Link
                        className="navbar-brand"
                        to={link.path}
                        key={linkIndex}
                    >
                        {link.text}
                    </Link>
                ))
            }
        </ul>
    </nav>
);
