import { render, screen } from "@testing-library/react"
import Greeting from "./Greeting"
import userEvent from "@testing-library/user-event"

describe('Greeting component',()=>{
    test('render hello world as text',()=>{
    //Arrange
    render(<Greeting/>)

    //Act
    //....nothing

    //Assert
    const helloWorldElement=screen.getByText('Hello World')
    expect(helloWorldElement).toBeInTheDocument()

})
})

test('render Its good to see you if the button was NOT clicked',()=>{
    render(<Greeting/>)
    const text=screen.getByText("good to see u",{exact:false})
    expect(text).toBeInTheDocument()
})

test('render "Changed!" if the button is clicked',()=>{
    render(<Greeting/>)
    const buttonElement=screen.getByRole('button')
    userEvent.click(buttonElement)
    const text=screen.getByText('Changed!')
    expect(text).toBeInTheDocument()
})

test('does not render "good to see you" if the button was clicked',()=>{
    render(<Greeting/>)
    const buttonElement=screen.getByRole('button')
    userEvent.click(buttonElement)
    const text=screen.queryByText("good to see u",{exact:false})
    expect(text).toBeNull()
})