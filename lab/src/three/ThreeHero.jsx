import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

export default function ThreeHero(){
  const ref = useRef(null)
  useEffect(()=>{
    const el = ref.current
    const width = el.clientWidth, height = el.clientHeight
    const renderer = new THREE.WebGLRenderer({ antialias:true, alpha:true })
    renderer.setSize(width, height)
    el.appendChild(renderer.domElement)

    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x0b0b0b)
    const camera = new THREE.PerspectiveCamera(45, width/height, 0.1, 100)
    camera.position.set(2.2,1.3,3.6)
    scene.add(new THREE.AmbientLight(0xffffff,0.28))
    const dir = new THREE.DirectionalLight(0xE63315,0.9); dir.position.set(5,6,2); scene.add(dir)

    const matGrey = new THREE.MeshStandardMaterial({ color:0x6f7071, metalness:0.95, roughness:0.2 })
    const matRed = new THREE.MeshStandardMaterial({ color:0xE63315, metalness:0.6, roughness:0.18, emissive:0xE63315, emissiveIntensity:0.03 })

    const group = new THREE.Group()
    for(let i=0;i<3;i++){
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(1.6 - i*0.18, 0.9 - i*0.08, 0.6 - i*0.05), i===0?matGrey:matRed)
      mesh.position.set((i-1)*0.7, i*0.02, -i*0.02)
      group.add(mesh)
    }
    scene.add(group)

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(8,6), new THREE.MeshStandardMaterial({ color:0x030303, metalness:0.95, roughness:0.9 }))
    floor.rotation.x = -Math.PI/2; floor.position.y = -0.7; scene.add(floor)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true

    function animate(){
      requestAnimationFrame(animate)
      const t = Date.now() * 0.0006
      group.rotation.y = t*0.8
      renderer.render(scene, camera)
    }
    animate()

    function onResize(){ renderer.setSize(el.clientWidth, el.clientHeight); camera.aspect = el.clientWidth / el.clientHeight; camera.updateProjectionMatrix() }
    window.addEventListener('resize', onResize)

    return ()=>{
      window.removeEventListener('resize', onResize)
      try{ renderer.dispose() }catch(e){}
      if(el && renderer.domElement) el.removeChild(renderer.domElement)
    }
  },[])
  return <div ref={ref} style={{width:'100%',height:'100%'}} />
}