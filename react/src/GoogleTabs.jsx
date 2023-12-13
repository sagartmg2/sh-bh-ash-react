import { useState } from "react"

function GoogleTabs() {

    const [currentTab, setCurrentTab] = useState("ALL")
    let tabs = ["all", "images", "videos"]
    return <>
        currentTab: {currentTab}
        <ul className="flex gap-5">
            {
                tabs.map(el => {
                    return <li className="cursor-pointer" onClick={() => {
                        setCurrentTab(el.toUpperCase())
                    }}>{el}</li>
                })
            }
        </ul>

        <div className="p-5 border m-5">
            {
                currentTab === "ALL"
                &&
                <p>all contents</p>
            }
            {
                currentTab === "IMAGES"
                &&
                <p>IMAGES contents</p>
            }
            {
                currentTab === "VIDEOS"
                &&
                <p>VIDOES contents</p>
            }
        </div>
    </>
}
export default GoogleTabs