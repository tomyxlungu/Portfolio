import React from 'react'

function Experties() {
    const experties = [
        { id: 1, title: 'React' },
        { id: 2, title: 'Typescript' },
        { id: 3, title: 'Tailwind CSS' },
        { id: 4, title: 'Node.js' },
        { id: 5, title: 'VS Code' },
        { id: 6, title: 'Git & Github' },
        { id: 7, title: 'Bootstrap' },
        { id: 8, title: 'Cisco Packet Tracer' },
        { id: 9, title: 'Wireshark' },
        { id: 10, title: 'VirtualBox' },
    ]   

    return (
        <div className='mb-14'>
            <h4 className='font-inter text-2xl font-bold text-white mb-4'>
                My Expertise
            </h4>
            {/* 
               We use flex-wrap to allow the items to flow naturally like text.
               The gap-x-2 and gap-y-1 manage the spacing between words and lines.
            */}
            <div className='flex flex-wrap items-center gap-x-2 gap-y-1'>
                {experties.map((expert, index) => (
                    <React.Fragment key={expert.id}>
                        <span className='text-lg text-gray-300 hover:text-white 
                            transition-colors cursor-default underline 
                            decoration-gray-500 underline-offset-4'>
                            {expert.title}
                        </span>
                        
                        {/* 
                           This logic ensures the dot separator only appears 
                           between items. 
                        */}
                        {index < experties.length - 1 && (
                            <span className="text-gray-500 font-bold" aria-hidden="true">·</span>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    )
}

export default Experties