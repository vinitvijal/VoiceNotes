import {HelpCircle, Home, Linkedin, Send } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "LinkedIn",
    url: "#",
    icon: Linkedin,
  }
  
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className=" flex items-center justify-center py-4">
        <h1 className=" font-semibold text-2xl">VoiceNotes</h1>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className=" border-t">
          {/* <SidebarGroupLabel>Features</SidebarGroupLabel> */}
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="  py-1.5 px-1.5">
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        


        
      </SidebarContent>

      <SidebarFooter>
      <SidebarGroup >
          <SidebarGroupLabel>Help</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
                <SidebarMenuItem className="">
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <HelpCircle />
                      <span>Support</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem className="">
                  <SidebarMenuButton asChild>
                    <a href='#'>
                      <Send />
                      <span>Feedback</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  )
}
