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
                const { amount } = (data as SpendingByDay[])
                    .reduce((prev, now) => now.amount > prev.amount ? now : prev)
                setMaxSpending(amount)
                console.log(amount)
            })
        })
    }, [])

    return (
        <div className="grid grid-flow-col gap-4 h-44 grid-cols-7 text-center mt-16">
            {spendings.map((spending) => {
                return (
                    <div key={spending.day} className="flex flex-col justify-end gap-2">
                        <div className="flex flex-col justify-end h-full">
                            <div className={`bar | 
                                relative rounded-md hover:opacity-60 cursor-pointer
                                ${spending.amount === maxSpending ? "bg-my-cyan" : "bg-my-red"}`}
                                style={{
                                    flexBasis: `${spending.amount / maxSpending * 100}%`
                                }}>
                                <div className="amount 
                                | text-xs md:text-base hidden absolute p-2 
                                bg-dark-brown rounded-md text-white 
                                top-[-3rem] left-[-0.5rem] right-[-0.5rem]">
                                    ${spending.amount}
                                </div>
                            </div>
                        </div>


                        <div className="text-sm">
                            {spending.day}
                        </div>
                    </div>
                )
            })}
        </div>

    )
}