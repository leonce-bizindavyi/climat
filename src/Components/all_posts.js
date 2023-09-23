import Image from 'next/image'
import Commentaire_post from './ecrire_commentaire';
import {useState } from 'react'
export default function Home() {
const [visibilite,setVisibilite] = useState(false);
const [vueautres,setVueautres] = useState(false);
const afficher_ecrire = ()=>{
  setVisibilite(!visibilite)
}

const afficher_autres_commentaires = ()=>{
  setVueautres(!vueautres)
}
 return (
    <div className='flex justify-center'>
          <div  className='grid grid-cols-1 place-items-center mt-2 gap-y-[1rem]'>
              <div className='w-[18rem] sm:w-[30rem] h-[3rem] bg-gray-200 rounded-md'>               
                <select type='text'  name="combo"   className="h-[3rem] bg-gray-200 border-none rounded-md mx-auto font-bold text-md text-emerald-900 block w-[16rem] sm:w-[24rem] p-1 focus:outline-none">                
                    <option value="post">posts</option>
                    <option value="blog">blog</option>
                    <option value="demand">demands</option>
                    <option value="taxe">taxes</option>
                </select>
              </div>
              <div className='grid grid-cols-1 w-[22.5rem] sm:w-[40rem] md:w-[44rem] lg:w-[48rem] h-auto rounded-sm bg-gray-200'>
                <div className='grid grid-cols-1'>
                  <div className='relative mb-6 grid grid-cols-1'>
                    <div className='flex space-x-1 ml-6 sm:space-x-3 mt-4 sm:ml-4'>
                      <div className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full'>
                        <Image src="/images/Le_passport.jpg" alt="image_profil" width={80} height={80} quality={100} className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full' />
                      </div>
                      <span className='text-md text-slate-600 font-semibold'>Ndereyimana</span>
                      <div className='absolute flex space-x-1 right-3'>
                        <span className='text-emerald-900'>12</span>
                        <span className='text-emerald-900'>jours après</span>
                    </div>
                    </div>
                    <span className='mx-auto text-emerald-900 text-md sm:-mt-[2rem] font-semibold'>Title du post</span>
                    <div className='grid grid-cols-1  place-items-center gap-y-[1rem]'>                    
                      <div className='w-[16rem] sm:w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto bg-white   lg:ml-6 rounded-md shadow-lg'>
                          < div className="min-h-[2.5rem] w-[16rem]  sm:w-[38rem]  p-3   text-gray-700 text-md text-start  font-semibold   ">
                            <h3>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                          </div>  
                      </div>
                      <div className='grid grid-cols-1 w-[19.5rem] ml-3 sm:-ml-2  sm:w-[34rem] rounded-md h-auto bg-white shadow-lg'>
                          <span className='ml-3 mt-2 text-md font-semibold text-emerald-900 font-bold'>Post</span>
                          <div  className='w-[17.5rem] sm:w-[32rem] min-h-[5rem] p-3 text-gray-700 mx-4 mt-2 mb-4 border-2 rounded-md text-md border-gray-400  font-[400] '>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae. 
                          Nunc viverra id nibh quis volutpat. Curabitur interdum mi vitae magna tincidunt pretium. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.                       
                          </div>
                          <div className='ml-[1.8rem] -mt-2 sm:ml-[16.5rem] sm:-mt-4 flex space-x-1'>
                              <span className='text-emerald-900 text-sm'>600</span>
                              <span className='text-emerald-900 text-sm'>personnes</span>
                              <span className='text-emerald-900 text-sm'>et vous aiment cette post</span>
                          </div>
                          <div className='flex space-x-[6rem] mx-auto mt-6'>
                              <button className="relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-5 text-emerald-900 invisible group-hover:visible">j&apos;aime</span>
                              </button>
                              <button onClick={afficher_ecrire} className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-11 text-emerald-900 invisible group-hover:visible">Commentaire</span>
                              </button>
                              <button className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-6 h-6 text-gray-600 group-hover:text-text hover:text-emerald-900">
                                  <path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-6 text-emerald-900 invisible group-hover:visible">Partager</span>
                              </button>
                          </div>
                          <div className='flex justify-center mb-4 mt-2'>
                          {visibilite ? <Commentaire_post />:""}
                          </div>
                          <div className='grid grid-cols-1 gap-y-1 -mt-2 mb-4 ml-1 sm:ml-3 '>
                              <span className='text-md font-semibold text-emerald-900 font-bold'>Commentaires</span>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              {/* autres Commentaires */}
                              { vueautres ? (<div className='grid grid-cols-1 gap-y-2'>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                              </div>) : ""}
                              <button onClick={afficher_autres_commentaires} className='w-16 h-8 text-md mx-auto hover:bg-gray-400 bg-gray-300 rounded-lg '>Autres...</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <hr className='h-[0.1rem] mx-auto mb-6 w-[17rem] sm:w-[24rem] bg-emerald-900' />
                </div>
                <div className='grid grid-cols-1'>
                  <div className='relative mb-6 grid grid-cols-1'>
                    <div className='flex space-x-1 ml-6 sm:space-x-3 mt-4 sm:ml-4'>
                      <div className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full'>
                        <Image src="/images/Le_passport.jpg" alt="image_profil" width={80} height={80} quality={100} className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full' />
                      </div>
                      <span className='text-md text-slate-600 font-semibold'>Ndereyimana</span>
                      <div className='absolute flex space-x-1 right-3'>
                        <span className='text-emerald-900'>12</span>
                        <span className='text-emerald-900'>jours après</span>
                    </div>
                    </div>
                    <span className='mx-auto text-emerald-900 text-md sm:-mt-[2rem] font-semibold'>Title du post</span>
                    <div className='grid grid-cols-1  place-items-center gap-y-[1rem]'>                    
                      <div className='w-[16rem] sm:w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto bg-white   lg:ml-6 rounded-md shadow-lg'>
                          < div className="min-h-[2.5rem] w-[16rem]  sm:w-[38rem]  p-3   text-gray-700 text-md text-start  font-semibold   ">
                            <h3>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                          </div>  
                      </div>
                      <div className='grid grid-cols-1 w-[19.5rem] ml-3 sm:-ml-2  sm:w-[34rem] rounded-md h-auto bg-white shadow-lg'>
                          <span className='ml-3 mt-2 text-md font-semibold text-emerald-900 font-bold'>Post</span>
                          <div  className='w-[17.5rem] sm:w-[32rem] min-h-[5rem] p-3 text-gray-700 mx-4 mt-2 mb-4 border-2 rounded-md text-md border-gray-400  font-[400] '>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae. 
                          Nunc viverra id nibh quis volutpat. Curabitur interdum mi vitae magna tincidunt pretium. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.                       
                          </div>
                          <div className='ml-[1.8rem] -mt-2 sm:ml-[16.5rem] sm:-mt-4 flex space-x-1'>
                              <span className='text-emerald-900 text-sm'>600</span>
                              <span className='text-emerald-900 text-sm'>personnes</span>
                              <span className='text-emerald-900 text-sm'>et vous aiment cette post</span>
                          </div>
                          <div className='flex space-x-[6rem] mx-auto mt-6'>
                              <button className="relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="absolute -mt-12  -ml-5 text-emerald-900 invisible group-hover:visible">j&apos;aime</span>
                              </button>
                              <button onClick={afficher_ecrire} className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-11 text-emerald-900 invisible group-hover:visible">Commentaire</span>
                              </button>
                              <button className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-6 h-6 text-gray-600 group-hover:text-text hover:text-emerald-900">
                                  <path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-6 text-emerald-900 invisible group-hover:visible">Partager</span>
                              </button>
                          </div>
                          <div className='flex justify-center mb-4 mt-2'>
                          {visibilite ? <Commentaire_post />:""}
                          </div>
                          <div className='grid grid-cols-1 gap-y-1 -mt-2 mb-4 ml-1 sm:ml-3 '>
                              <span className='text-md font-semibold text-emerald-900 font-bold'>Commentaires</span>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              {/* autres Commentaires */}
                              { vueautres ? (<div className='grid grid-cols-1 gap-y-2'>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                              </div>) : ""}
                              <button onClick={afficher_autres_commentaires} className='w-16 h-8 text-md mx-auto hover:bg-gray-400 bg-gray-300 rounded-lg '>Autres...</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <hr className='h-[0.1rem] mx-auto mb-6 w-[17rem] sm:w-[24rem] bg-emerald-900' />
                </div>
                <div className='grid grid-cols-1'>
                  <div className='relative mb-6 grid grid-cols-1'>
                    <div className='flex space-x-1 ml-6 sm:space-x-3 mt-4 sm:ml-4'>
                      <div className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full'>
                        <Image src="/images/Le_passport.jpg" alt="image_profil" width={80} height={80} quality={100} className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full' />
                      </div>
                      <span className='text-md text-slate-600 font-semibold'>Ndereyimana</span>
                      <div className='absolute flex space-x-1 right-3'>
                        <span className='text-emerald-900'>12</span>
                        <span className='text-emerald-900'>jours après</span>
                    </div>
                    </div>
                    <span className='mx-auto text-emerald-900 text-md sm:-mt-[2rem] font-semibold'>Title du post</span>
                    <div className='grid grid-cols-1  place-items-center gap-y-[1rem]'>                    
                      <div className='w-[16rem] sm:w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto bg-white   lg:ml-6 rounded-md shadow-lg'>
                          < div className="min-h-[2.5rem] w-[16rem]  sm:w-[38rem]  p-3   text-gray-700 text-md text-start  font-semibold   ">
                            <h3>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                          </div>  
                      </div>
                      <div className='grid grid-cols-1 w-[19.5rem] ml-3 sm:-ml-2  sm:w-[34rem] rounded-md h-auto bg-white shadow-lg'>
                          <span className='ml-3 mt-2 text-md font-semibold text-emerald-900 font-bold'>Post</span>
                          <div  className='w-[17.5rem] sm:w-[32rem] min-h-[5rem] p-3 text-gray-700 mx-4 mt-2 mb-4 border-2 rounded-md text-md border-gray-400  font-[400] '>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae. 
                          Nunc viverra id nibh quis volutpat. Curabitur interdum mi vitae magna tincidunt pretium. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.                       
                          </div>
                          <div className='ml-[1.8rem] -mt-2 sm:ml-[16.5rem] sm:-mt-4 flex space-x-1'>
                              <span className='text-emerald-900 text-sm'>600</span>
                              <span className='text-emerald-900 text-sm'>personnes</span>
                              <span className='text-emerald-900 text-sm'>et vous aiment cette post</span>
                          </div>
                          <div className='flex space-x-[6rem] mx-auto mt-6'>
                              <button className="relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="absolute -mt-12  -ml-5 text-emerald-900 invisible group-hover:visible">j&apos;aime</span>
                              </button>
                              <button onClick={afficher_ecrire} className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-11 text-emerald-900 invisible group-hover:visible">Commentaire</span>
                              </button>
                              <button className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-6 h-6 text-gray-600 group-hover:text-text hover:text-emerald-900">
                                  <path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-6 text-emerald-900 invisible group-hover:visible">Partager</span>
                              </button>
                          </div>
                          <div className='flex justify-center mb-4 mt-2'>
                          {visibilite ? <Commentaire_post />:""}
                          </div>
                          <div className='grid grid-cols-1 gap-y-1 -mt-2 mb-4 ml-1 sm:ml-3 '>
                              <span className='text-md font-semibold text-emerald-900 font-bold'>Commentaires</span>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              {/* autres Commentaires */}
                              { vueautres ? (<div className='grid grid-cols-1 gap-y-2'>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                              </div>) : ""}
                              <button onClick={afficher_autres_commentaires} className='w-16 h-8 text-md mx-auto hover:bg-gray-400 bg-gray-300 rounded-lg '>Autres...</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <hr className='h-[0.1rem] mx-auto mb-6 w-[17rem] sm:w-[24rem] bg-emerald-900' />
                </div>
                <div className='grid grid-cols-1'>
                  <div className='relative mb-6 grid grid-cols-1'>
                    <div className='flex space-x-1 ml-6 sm:space-x-3 mt-4 sm:ml-4'>
                      <div className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full'>
                        <Image src="/images/Le_passport.jpg" alt="image_profil" width={80} height={80} quality={100} className='w-[2.8rem] h-[2.8rem] sm:w-[3.5rem] w-[2.8rem] h-[2.8rem] sm:h-[3.5rem] rounded-full' />
                      </div>
                      <span className='text-md text-slate-600 font-semibold'>Ndereyimana</span>
                      <div className='absolute flex space-x-1 right-3'>
                        <span className='text-emerald-900'>12</span>
                        <span className='text-emerald-900'>jours après</span>
                    </div>
                    </div>
                    <span className='mx-auto text-emerald-900 text-md sm:-mt-[2rem] font-semibold'>Title du post</span>
                    <div className='grid grid-cols-1  place-items-center gap-y-[1rem]'>                    
                      <div className='w-[16rem] sm:w-[30rem] md:w-[34rem] lg:w-[40rem] h-auto bg-white   lg:ml-6 rounded-md shadow-lg'>
                          < div className="min-h-[2.5rem] w-[16rem]  sm:w-[38rem]  p-3   text-gray-700 text-md text-start  font-semibold   ">
                            <h3>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </h3>
                          </div>  
                      </div>
                      <div className='grid grid-cols-1 w-[19.5rem] ml-3 sm:-ml-2  sm:w-[34rem] rounded-md h-auto bg-white shadow-lg'>
                          <span className='ml-3 mt-2 text-md font-semibold text-emerald-900 font-bold'>Post</span>
                          <div  className='w-[17.5rem] sm:w-[32rem] min-h-[5rem] p-3 text-gray-700 mx-4 mt-2 mb-4 border-2 rounded-md text-md border-gray-400  font-[400] '>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae. 
                          Nunc viverra id nibh quis volutpat. Curabitur interdum mi vitae magna tincidunt pretium. 
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.                       
                          </div>
                          <div className='ml-[1.8rem] -mt-2 sm:ml-[16.5rem] sm:-mt-4 flex space-x-1'>
                              <span className='text-emerald-900 text-sm'>600</span>
                              <span className='text-emerald-900 text-sm'>personnes</span>
                              <span className='text-emerald-900 text-sm'>et vous aiment cette post</span>
                          </div>
                          <div className='flex space-x-[6rem] mx-auto mt-6'>
                              <button className="relative group">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                </svg>
                                <span className="absolute -mt-12  -ml-5 text-emerald-900 invisible group-hover:visible">j&apos;aime</span>
                              </button>
                              <button onClick={afficher_ecrire} className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-gray-600 group-hover:text-emerald-900">
                                  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-11 text-emerald-900 invisible group-hover:visible">Commentaire</span>
                              </button>
                              <button className='relative group'>
                                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="w-6 h-6 text-gray-600 group-hover:text-text hover:text-emerald-900">
                                  <path fill="currentColor" d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
                                </svg>
                                <span className="absolute -mt-12 -ml-6 text-emerald-900 invisible group-hover:visible">Partager</span>
                              </button>
                          </div>
                          <div className='flex justify-center mb-4 mt-2'>
                          {visibilite ? <Commentaire_post />:""}
                          </div>
                          <div className='grid grid-cols-1 gap-y-1 -mt-2 mb-4 ml-1 sm:ml-3 '>
                              <span className='text-md font-semibold text-emerald-900 font-bold'>Commentaires</span>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              <div className='flex space-x-1'>
                                  <div className='w-[2rem] h-[2rem] rounded-full ' >
                                    <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                  </div>
                                  <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae.  
                                  </div>
                              </div>
                              {/* autres Commentaires */}
                              { vueautres ? (<div className='grid grid-cols-1 gap-y-2'>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_2.jpg" width={80} height={80} quality={100} alt='photo_commentant_1' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400] text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                                <div className='flex space-x-1'>
                                    <div className='w-[2rem] h-[2rem] rounded-full ' >
                                      <Image src="/images/image_1.jpg" width={80} height={80} quality={100} alt='photo_commentant_2' className='w-[2rem] h-[2rem] rounded-full '  />
                                    </div>
                                    <div className='min-h-[3.5rem] sm:min-h-[5rem] w-[16rem] sm:w-[26rem] p-1 mt-5 rounded-tr-2xl rounded-br-2xl rounded-bl-2xl text-md font-[400]  text-gray-700 border-2 border-gray-300 '>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris luctus lacus dolor, a fringilla neque commodo vitae,autres.  
                                    </div>
                                </div>
                              </div>) : ""}
                              <button onClick={afficher_autres_commentaires} className='w-16 h-8 text-md mx-auto hover:bg-gray-400 bg-gray-300 rounded-lg '>Autres...</button>
                          </div>
                      </div>
                    </div>
                  </div>
                  <hr className='h-[0.1rem] mx-auto mb-6 w-[17rem] sm:w-[24rem] bg-emerald-900' />
                </div>
              </div>
          </div>
    </div>
  )
}
