import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

class Home extends Component {
    render() {
        return (
        <div>
            <Container fluid className="bg-light">
                <Container className="md">
                  <h2>Who We Are</h2>
                  <p>
                    The Blue Hat Ladies is a pro-democracy organization based in the
                    Wyoming Valley of Pennsylvania, created to resist, and counter, the
                    harmful effects of the current administration. The Blue Hat ladies
                    welcome as members women of any, or no, party affiliation, who are
                    willing to help advance our mission.
                  </p>
                  <h2>Our Mission</h2>
                  <p>
                    The Blue Hat Ladies exist to be source of strength and support for
                    our members and a force for resistance to the authoritarianism and
                    cruelty that has infiltrated our country's leadership.
                  </p>
                  <h2>Our Values</h2>
                  <p>
                    Our values are the guideposts we use to inform our work and guide
                    our journey toward our Vision.
                    <ul>
                        <li><b>Truth</b><br/>
                            We uphold honesty and transparency as fundamental to fostering
                            trust and combating disinformation.
                        </li>
                        <li><b>Justice</b><br/>
                            We strive to create a society where fairness and equal rights
                            prevail for all individuals.
                        </li>
                        <li><b>Equality</b><br/>
                            We believe in leveling the playing field so that everyone has the
                            same opportunities to thrive and succeed.
                        </li>
                        <li><b>Inclusion</b><br/>
                            We celebrate diversity and work to ensure that all voices are
                            heard and valued in our communities.
                        </li>
                        <li><b>Accountability</b><br/>
                            We hold individuals and institutions responsible for their actions
                            to maintain integrity and fairness.
                        </li>
                        <li><b>Responsibility</b><br/>
                            We accept the duty to act with care, make informed decisions,
                            and contribute to the greater good.
                        </li>
                    </ul>
                  </p>
                  <h2>Our Vision</h2>
                  <p>
                    We envision an America led by honest, ethical, and fair-minded leaders
                    who put the needs of the people above personal or political gain. Here,
                    democracy thrives through transparency, accountability, and active civic
                    engagement. Every person is treated with dignity and respect, with
                    equal opportunities to succeed, regardless of race, gender, identity,
                    sexual orientation, or background. By fostering justice, inclusion, and
                    integrity in governance, we strive for a more perfect union where
                    fairness is a reality, and progress benefits all.
                  </p>
                  <h2>What We Believe</h2>
                  <p>
                  <ul>
                    <li>
                        We believe in the power of democracy and the collective action of
                        "We the People" to shape a government that works for everyone.
                    </li>
                    <li>
                        We believe in the humanity, equality, and dignity of all people.
                        Therefore, we reject all forms of hatred, bigotry, racism,
                        nationalism, misogyny, anti-LGBTQ discrimination, and
                        scapegoating used to divide and oppress.
                    </li>
                    <li>
                        We believe the climate crisis is an urgent and existential threat
                        that requires bold action and systemic change, including a
                        transition to a just, sustainable economy through a Green New
                        Deal.
                    </li>
                    <li>
                        We believe healthcare is a fundamental human right and must be
                        made accessible to all. It must be free from corporate greed and
                        legislative restrictions on any person’s bodily autonomy or access
                        to reproductive healthcare.
                    </li>
                    <li>
                        We believe in the value of science, education, and truth. We must
                        harness technological advancements to benefit all of humanity
                        while defending against disinformation and authoritarian abuses
                        of power.
                    </li>
                    <li>
                        We believe in free and fair elections as the cornerstone of
                        democracy. To preserve this foundation we must enact campaign
                        finance reform, protect voting rights, and ensure that
                        representatives serve the public interest—not special interests.
                    </li>
                  </ul>
                </p>
                <h2>What We Do</h2>
                <p>
                    <b>Democracy is not a spectator sport.</b>
                    <br />
                    To create a government that is truly "of the people, by the people,
                    for the people," we engage in politics on every level, striving for
                    justice, equality, and accountability.
                    <ul>
                        <li>
                            We educate and empower our community to understand and
                            address the issues that impact our lives, fostering a culture of civic
                            engagement and political participation.
                        </li>
                        <li>
                            We build coalitions with like-minded organizations and individuals
                            who share our values and commitment to a more inclusive and
                            equitable society.
                        </li>
                        <li>
                            We advocate for change by supporting candidates and policies
                            that align with our principles and by holding those in power
                            accountable for their actions.
                        </li>
                        <li>
                            We organize and mobilize to amplify our voices, meet with
                            representatives, build public awareness through multiple channels
                            such as social media, public speaking, etc., and push for bold,
                            transformative action on the issues that matter most.
                        </li>
                        <li>
                            We support not-for-profit organizations that align with our values
                            and whose work supports those who may be harmed by the
                            policies of the current administration.
                        </li>
                        <li>
                            We have fun! We come together in social settings where we enjoy
                            friendships and mutual support in our quest to maintain our
                            sanity and minimize the stress created by these uncertain times.
                            Our work is not bound by election cycles. We are building a lasting
                            movement for justice and equality that continues to fight for a fairer,
                            more inclusive democracy.
                            Together, through determination and solidarity, we know that a
                            better, brighter future is possible—and we won’t stop until it’s
                            achieved.
                        </li>
                    </ul>
                  </p>
                </Container>
            </Container>
        </div>
        );
    }
}
export default Home;