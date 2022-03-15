import { useState } from 'react';
import './App.css';
import profile from './ui_user_profile.svg'

export default function App() {
  const [ showModal, setShowModal ] = useState(false)
  return (
    <>
      <div className='flex flex-row place-content-between'>
        <div className='flex flex-col ml-24 mt-32'>
          <h1 className='text-9xl font-bold'>
            Townhall
          </h1>
          <button className='self-start px-4 py-2 font-semibold text-sm bg-orange-950 text-white rounded-md shadow-sm mt-8' onClick={() => setShowModal(true)}>Watch a Tutorial</button>
          <h3 className='font-bold mt-44'>Whenever you're ready</h3>
          <button className='self-start text-2xl mt-4 px-4 py-2 font-semibold text-sm bg-orange-950 text-white rounded-md shadow-sm' onClick={() => setShowModal(true)}>Start a Meeting Now</button>
          <button className='self-start text-2xl mt-4 px-4 py-2 font-semibold text-sm bg-orange-950 text-white rounded-md shadow-sm' onClick={() => setShowModal(true)}>Schedule a Meeting Later</button>
        </div>
        <div className='flex flex-col text-right mr-24'>
          <img src={profile} alt='Profile' className='w-10 self-end mt-8'/>
          <h1 className='font-bold text-left mt-[60vh] mb-1'>Planned Meetings</h1>
          <PlannedMeetings />
        </div>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GrayedOut show={showModal} />
      </div>
    </>
  )
}

function Modal({ showModal, setShowModal }) {
  if (!showModal) return null;
  return (
    <div class='z-20 ml-auto mr-auto mt-32 absolute bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all'>
      <div class='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
        <div class='sm:flex sm:items-start'>
          <div class='mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left'>
            <h3 class='text-lg leading-6 font-medium text-gray-900' id='modal-title'>Join the waitlist</h3>
            <div class='mt-2'>
              <p class='text-sm text-gray-500'>Townhall is coming soon -- join the waitlist!</p>
            </div>
          </div>
        </div>
        <input className='sm:ml-4 border mt-2 rounded pl-2' type='text' placeholder='Email: '/>
      </div>
      <div class='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse'>
        <button type='button' onClick={() => setShowModal(false)} class='w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm'>Submit</button>
        <button type='button' onClick={() => setShowModal(false)}class='mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Cancel</button>
      </div>
    </div>
  )
}

function PlannedMeetings() {
  return (
    <>
      <div class='bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 border'>
        <div class='flex flex-row'>
          <div className='rounded-full bg-gray-200 w-10 h-10 align-self-center mr-4' />
          <div className='flex flex-col w-5/6'>
            <h2 className='text-left'>Wednesday, March 16th at 3:00 pm</h2>
            <h2 className='text-left'>Jane Doe</h2>
          </div>
        </div>
      </div>
      <div class='bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row border'>
        <button type='button' class='text-sm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Invite More Guests</button>
        <button type='button' class='text-sm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Edit</button>
        <button type='button' class='text-sm mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm'>Cancel</button>
      </div>
    </>
  )
}

function GrayedOut({ show }) {
  if (!show) return null;
  return (
    <div className='z-10 bg-black absolute h-screen w-screen opacity-20' />
  )
}