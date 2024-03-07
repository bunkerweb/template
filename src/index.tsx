import { Waves } from "lucide-react"

const Example = {
  name: 'Example plugin',
  id: 'my.plugin',
  description: "An example of how Bunker plugins work",
  icon: Waves,

  tile() {
    return (
      <div>
        Hello from my example plugin!
      </div>
    )
  },

  page() {
    return <div>Hello from my example plugin!</div>
  }
}

export default Example
