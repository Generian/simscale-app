import React, { Component } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { STLLoader } from './jsm/loaders/STLLoader.js';
import './styles/App.scss';

class Scene extends Component {
  mount: any
  scene: THREE.Scene
  camera: THREE.PerspectiveCamera
  material: THREE.MeshBasicMaterial
  renderer: THREE.WebGLRenderer
  cube: THREE.Mesh<THREE.BoxGeometry, THREE.MeshBasicMaterial>
  frameId: any
  plane: THREE.Mesh<THREE.PlaneGeometry, THREE.MeshBasicMaterial>;
  
  constructor(props:any) {
    super(props)

    this.start = this.start.bind(this)
    this.stop = this.stop.bind(this)
    this.animate = this.animate.bind(this)
  }

  componentDidMount() {
    const width = this.mount.clientWidth
    const height = this.mount.clientHeight

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: '#433F81' })
    const cube = new THREE.Mesh(geometry, material)

    const plane_geo = new THREE.PlaneGeometry(3, 10)
    const plane = new THREE.Mesh(plane_geo, material)

    camera.position.x = 4
    camera.position.y = 4
    camera.position.z = 4
    camera.lookAt( new THREE.Vector3(0, 0, 0) )

    const loader = new STLLoader();

    // loader.load( 'model.stl', function ( stl ) {

    //   scene.add( stl.scene );

    // }, undefined, function ( error ) {

    //   console.error( error );

    // } );

    const material_model = new THREE.MeshPhongMaterial( { color: 0xAAAAAA, specular: 0x111111, shininess: 200 } );

    loader.load( './assets/model.stl', function ( geometry ) {

      const mesh = new THREE.Mesh( geometry, material_model );

      mesh.position.set( 0, - 0.37, - 0.6 );
      mesh.rotation.set( - Math.PI / 2, 0, 0 );
      mesh.scale.set( 2, 2, 2 );

      mesh.castShadow = true;
      mesh.receiveShadow = true;

      scene.add( mesh );

    } );

    // scene.add(cube)
    // scene.add(plane)
    renderer.setClearColor('#ffffff')
    renderer.setSize(width, height)

    this.scene = scene
    this.camera = camera
    this.renderer = renderer
    this.material = material
    this.cube = cube
    this.plane = plane

    this.plane.lookAt(new THREE.Vector3(0, 0, 1))

    this.mount.appendChild(this.renderer.domElement)
    this.start()
  }

  componentWillUnmount() {
    this.stop()
    this.mount.removeChild(this.renderer.domElement)
  }

  start() {
    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate)
    }
  }

  stop() {
    cancelAnimationFrame(this.frameId)
  }

  animate() {
    this.cube.rotation.x += 0.001
    this.cube.rotation.y += 0.001

    this.renderScene()
    this.frameId = window.requestAnimationFrame(this.animate)
  }

  renderScene() {
    this.renderer.render(this.scene, this.camera)
  }

  render() {
    let className = 'container container__scene'
    
    return (
      <div
        className={className}
        ref={(mount) => { this.mount = mount }}
      />
    )
  }
}

export default Scene