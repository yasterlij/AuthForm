import{Button} from "@/components/ui/button";

export default function Home() {
  return (
    <>
    
    <Button size="lg" variant="outline">
      Click me
    </Button><br/>
    
    <a href="dashboard/users">Users</a><br/>
    <a href="dashboard/settings">Setting</a> <br/>
    <a href="dashboard">Dashboard</a>
  </>
  )
}
