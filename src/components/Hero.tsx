import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  


function Hero() {
    
    return (
    <div className="w-auto max-w-2xl mx-auto flex flex-col  rounded-2xl"> 

      <Card className="w-auto max-w-2xl mx-auto flex flex-row justify-evenly gap-5 rounded-2xl" >
        {/* <Avatar className="flex flex-col my-auto mx-6">
            <AvatarImage  src="https://github.com/shadcn.png" />
            <AvatarFallback>DF</AvatarFallback>
            </Avatar> */}
        <img className="flex flex-col my-5 mx-0  rounded-full" src="https://github.com/shadcn.png" alt="DF" width={96} height={96}/>
          <CardHeader>
    <CardTitle className="text-nowrap text-6xl">Deury Ferreira</CardTitle>
    <CardDescription>
      <p>Full Stack Developer</p>
    </CardDescription>
  </CardHeader>
<CardContent className="flex flex-row">
dadasd
</CardContent>
</Card>
            </div>

  )
}

export default Hero