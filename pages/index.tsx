import React, { useState } from "react";
import { Container } from '../components/Container'
import { xml } from '@codemirror/lang-xml';
import { EditorView } from "@codemirror/view";
import dynamic from 'next/dynamic'

import {darkTheme} from '../components/CodeMirror/darkTheme'
import examples from '../examples/examples'
import { ListCell } from '../components/ListCell'
import prettier from 'prettier/standalone';
import htmlParser from 'prettier/parser-html';
import outdent from 'outdent'
import * as Dialog from '@radix-ui/react-dialog';

const CodeMirror = dynamic(() => {
    return import('@uiw/react-codemirror')
}, {ssr: false})


type ExampleProps = {
    title: string
    description: string
    author: string
    svg: (topMatter:string) => string
}
function formatCode(example:ExampleProps) {
    const {
        title,
        description,
        author,
        svg,
    } = example

    const topMatter = outdent`
    <!--
    @title: ${title}
    @author: ${author}
    @description: ${description}
    -->
    `

    return prettier.format(
        svg(topMatter), { parser: 'html',  plugins: [htmlParser] }
    )
}

function formatExisting(code:string) {
    return prettier.format(code, { parser: 'html',  plugins: [htmlParser] })
}


export default function Editor() {

    const [colorMode, setColorMode] = useState('light')

    const [exampleIndex, setExampleIndex] = useState(0)

    const [code, setCode] = useState(formatCode(examples[0]))

    return (
        <Container>
            <Dialog.Root>
            <span className="flex h-screen flex-row-reverse">
            <Dialog.Trigger>
                Open
            </Dialog.Trigger>
                <div
                    className="w-full h-full overflow-hidden"
                    dangerouslySetInnerHTML={{ __html: code }}
                />
                <div className="relative w-full overflow-y-scroll">
                    <CodeMirror
                        className="w-full border-r border-r-[#333] pb-16"
                        value={ code }
                        height={ '100%' }
                        theme={ colorMode === 'light' ? darkTheme : darkTheme }
                        extensions={[
                            xml(),
                            EditorView.lineWrapping
                        ]}
                        onChange={ (value) => setCode(value) }
                    />
                    <span className="fixed w-full flex p-2 bg-[#111] bottom-0 border-t border-t-[#333]">
                        <button 
                            className="py-1 px-3 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors" 
                            onClick={ () => setCode(formatExisting(code)) }>
                                Format
                        </button>
                    </span>
                </div>

                <nav className="flex flex-col min-w-[256px] bg-[#111] border-r border-r-[#333]">
                    <div className="py-4 px-4 flex w-full">
                        <p className="flex w-full py-2 px-4 rounded-xl font-medium text-white font-monospace">
                            SVG Playground
                        </p>
                    </div>

                    <ol className="flex flex-col">
                    {
                        examples.map((example, index) => (
                            <ListCell
                                key={ `${index}` }
                                isSelected={ index === exampleIndex }
                                onClick={ () => {
                                    setExampleIndex(index) 
                                    setCode(formatCode(example))
                                }}
                            >
                                { example.title }
                            </ListCell>
                        ))
                    }
                    </ol>
                </nav>
            </span>
            
                
                <Dialog.Portal>
                <Dialog.Overlay className="fixed top-0 left-0 w-full h-full bg-black/75" />
                <Dialog.Content className="fixed w-[96vw] top-[50%] left-[50%] p-8 translate-x-[-50%] translate-y-[-50%] rounded-3xl bg-gray-900 max-h-xl max-w-2xl">
                    <Dialog.Title className="text-white">Menu</Dialog.Title>
                    <Dialog.Description>
                    <div className="flex flex-col">sdsdfsdf</div>
                    </Dialog.Description>
                    <Dialog.Close />
                </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </Container>
    )
}
