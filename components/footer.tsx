import { LuGithub, LuInstagram, LuFacebook } from "react-icons/lu";
import Link from "next/link";
import { SiTiktok } from "react-icons/si";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineSpotify, AiOutlineWhatsApp } from "react-icons/ai";

const socialLinks = [
    { href: "https://github.com/balxz", icon: LuGithub, label: "GitHub" },
    {
        href: "https://instagram.com/iqstore78",
        icon: LuInstagram,
        label: "Instagram"
    },
    {
        href: "https://www.tiktok.com/@iqstore78",
        icon: SiTiktok,
        label: "TikTok"
    },
    {
        href: "https://www.facebook.com/profile.php?id=100068517258575",
        icon: LuFacebook,
        label: "Facebook"
    },
    { href: "https://t.me/sh_team1", icon: FaTelegramPlane, label: "Telegram" },
    {
        href: "https://open.spotify.com/user/31gyydb6nrybykazukcltki64mhu?si=AxXmd5BySlOjMVZGR2ucIg",
        icon: AiOutlineSpotify,
        label: "Spotify"
    },
    {
        href: "https://whatsapp.com/channel/0029Vb6iksr1NCrNVq8mtd3p",
        icon: AiOutlineWhatsApp,
        label: "WhatsApp"
    }
];

export function Footer() {
    return (
        <footer className="border-t border-border/40 bg-background/95 backdrop-blur">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-muted-foreground">{`bálzz ${new Date().getFullYear()} • I Think Yt Short Is Good.`}</p>
                    <div className="flex items-center gap-4">
                        {socialLinks.map(({ href, icon: Icon, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                                aria-label={label}
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>
                    <div className="text-sm flex text-gray-400 space-x-4">
                        <Link
                            href="/"
                            className="hover:text-white transition-colors"
                        >
                            /
                        </Link>
                        <Link
                            href="/support"
                            className="hover:text-white transition-colors"
                        >
                            Support
                        </Link>
                        <Link
                            href="/api"
                            className="hover:text-white transition-colors"
                        >
                            Api
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
