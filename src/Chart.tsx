import { useEffect, useState } from "react"
import { SpendingByDay } from "./spending_by_day"

export function Chart() {
    const [spendings, setSpendings] = useState<SpendingByDay[]>([])
    const [maxSpending, setMaxSpending] = useState<number>(0)
    useEffect(() => {
        fetch("/data.json", {
            method: 'GET'
        }).then((res) => {
            res.json().then((data) => {
                setSpendings(data)
                const { amount } = data.reduce((prev, now) => now.amount > prev.amount ? now : prev)
                setMaxSpending(amount)
                console.log(amount)
            })
        })
    }, [])

    return (
        <div className="grid grid-flow-col gap-4 h-44 grid-cols-7 text-center">
            {spendings.map((spending) => {
                return (
                    <div key={spending.day} className="flex flex-col justify-end">
                        <div className="bar | bg-my-red relative rounded-md hover:bg-my-cyan cursor-pointer"
                            style={{ height: `${spending.amount / maxSpending * 100}%` }}>
                            <div className="amount | hidden absolute p-2 bg-dark-brown rounded-md text-white top-[-3rem] left-[-0.5rem] right-[-0.5rem]">
                                {spending.amount}
                            </div>
                        </div>
                        <div>
                            {spending.day}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}