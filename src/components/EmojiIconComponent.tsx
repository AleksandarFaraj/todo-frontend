import React from "react"

const todo_type_map: { [key in TodoType]: { symbol: string, description: string } } = {
    default: {
        symbol: "📩",
        description: "Default"
    },
    web: { symbol: "🕸", description: "web" },
    music: {
        symbol: "🏠", description: "music"
    }
}

export const EmojiIconComponent: React.FunctionComponent<React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> & { todo_type: TodoType }> = ({ todo_type, ...props }) => (
    todo_type && todo_type_map[todo_type] ? <span {...props}>{todo_type_map[todo_type].symbol}</span> : <span></span>
)
