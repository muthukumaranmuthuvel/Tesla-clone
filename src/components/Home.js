import React from 'react'
import styled from 'styled-components'
import Section from './Section'
function Home() {
    return (
        <Container>
            <Section
            name="Model S"
            description ="Order Online for Touches delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            bgimg="model-s.jpg"
            />
            <Section
            name="Model X"
            description ="Order Online for Touches delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            bgimg="model-x.jpg"
            />
            <Section
            name="Model Y"
            description ="Order Online for Touches delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            bgimg="model-y.jpg"
            />
            <Section
            name="Model 3"
            description ="Order Online for Touches delivery"
            leftbtn="Custom Order"
            rightbtn="Existing Inventory"
            bgimg="model-3.jpg"
            />
            <Section
            name="Lowest cost solar panel"
            description ="Money back guarantee"
            leftbtn="Order now"
            rightbtn="Learn More"
            bgimg="solar-panel.jpg"
            />
            <Section
            name="Solar for New roof"
            description ="Solar Roof Costs Less Than a New Roof Plus Solar Panels"
            leftbtn="Order now"
            rightbtn="Learn More"
            bgimg="solar-roof.jpg"
            />
            <Section
            name="Accessories"
            description =""
            leftbtn="Order now"
            bgimg="accessories.jpg"
            />
        </Container>
    )
}

export default Home
const Container = styled.div`
    height: 100vh;
`