import GitHubIcon from "assets/github-icon.svg"

export default function GitHubButton() {
    return (
        <a className="flex justify-center absolute left-2 top-1" href="https://github.com/noviceGuru/pomodoro" target="_blank">
            <img src={GitHubIcon} alt="show-list-button" className="m-6 w-8 sm:w-14" />
        </a>
    )
}