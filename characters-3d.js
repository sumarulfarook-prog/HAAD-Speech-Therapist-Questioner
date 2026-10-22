
import * as THREE from "three";

(() => {
  "use strict";

  const stages = [
    { id: "homeCharacterStage", canvasId: "homeCharacterCanvas" },
    { id: "quizCharacterStage", canvasId: "quizCharacterCanvas" }
  ];

  const actors = new Map();

  function material(color, roughness = 0.75) {
    return new THREE.MeshStandardMaterial({
      color,
      roughness,
      metalness: 0
    });
  }

  const fur = material("#f2a65a");
  const cream = material("#fff0d5");
  const innerEar = material("#ef9caa");
  const dark = material("#493747");
  const pink = material("#f47f9b");
  const white = material("#ffffff");
  const mouseFur = material("#aab5c8");
  const mouseInner = material("#f3a7bc");
  const eyeMaterial = material("#302537", 0.25);

  function ball(parent, name, color, position, scale, segments = 24) {
    const mesh = new THREE.Mesh(
      new THREE.SphereGeometry(1, segments, segments),
      color
    );
    mesh.name = name;
    mesh.position.set(...position);
    mesh.scale.set(...scale);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    parent.add(mesh);
    return mesh;
  }

  function tube(parent, points, radius, color) {
    const curve = new THREE.CatmullRomCurve3(
      points.map(point => new THREE.Vector3(...point))
    );
    const mesh = new THREE.Mesh(
      new THREE.TubeGeometry(curve, 24, radius, 8, false),
      color
    );
    mesh.castShadow = true;
    parent.add(mesh);
    return mesh;
  }

  function makeCat() {
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);

    ball(body, "body", fur, [0, 0.76, 0], [0.43, 0.56, 0.35]);
    ball(body, "belly", cream, [0, 0.72, 0.29], [0.29, 0.38, 0.12]);

    for (const side of [-1, 1]) {
      ball(body, "leg", fur, [side * 0.25, 0.3, 0.03], [0.17, 0.29, 0.18]);
      ball(body, "paw", cream, [side * 0.25, 0.14, 0.09], [0.18, 0.1, 0.2]);
    }

    const head = new THREE.Group();
    head.position.set(0, 1.43, 0.02);
    body.add(head);

    ball(head, "head", fur, [0, 0, 0], [0.55, 0.49, 0.44], 32);

    const earLeft = ball(
      head, "ear", fur, [-0.38, 0.39, 0],
      [0.2, 0.29, 0.15]
    );
    earLeft.rotation.z = 0.35;

    const earRight = ball(
      head, "ear", fur, [0.38, 0.39, 0],
      [0.2, 0.29, 0.15]
    );
    earRight.rotation.z = -0.35;

    ball(head, "inner ear", innerEar, [-0.38, 0.4, 0.125], [0.11, 0.17, 0.04]);
    ball(head, "inner ear", innerEar, [0.38, 0.4, 0.125], [0.11, 0.17, 0.04]);

    for (const side of [-1, 1]) {
      ball(head, "eye", white, [side * 0.2, 0.06, 0.378], [0.115, 0.14, 0.07]);
      ball(head, "pupil", eyeMaterial, [side * 0.19, 0.045, 0.44], [0.064, 0.09, 0.035]);
      ball(head, "eye shine", white, [side * 0.19 - 0.02, 0.085, 0.47], [0.022, 0.027, 0.015]);
      ball(head, "cheek", pink, [side * 0.34, -0.15, 0.34], [0.12, 0.07, 0.035]);
    }

    ball(head, "muzzle", cream, [0, -0.16, 0.37], [0.24, 0.16, 0.12]);
    ball(head, "nose", pink, [0, -0.08, 0.49], [0.075, 0.055, 0.045]);

    tube(head, [[0, -0.12, 0.48], [0, -0.22, 0.48]], 0.012, dark);
    tube(head, [[0, -0.22, 0.48], [-0.09, -0.25, 0.46]], 0.012, dark);
    tube(head, [[0, -0.22, 0.48], [0.09, -0.25, 0.46]], 0.012, dark);

    for (const side of [-1, 1]) {
      tube(head, [
        [side * 0.18, -0.17, 0.4],
        [side * 0.47, -0.13, 0.39],
        [side * 0.55, -0.1, 0.35]
      ], 0.008, cream);
      tube(head, [
        [side * 0.18, -0.2, 0.4],
        [side * 0.46, -0.24, 0.37]
      ], 0.008, cream);
    }

    const tail = tube(body, [
      [0.22, 0.55, -0.2],
      [0.55, 0.65, -0.26],
      [0.73, 0.92, -0.25],
      [0.66, 1.1, -0.2]
    ], 0.065, fur);
    tail.name = "tail";

    root.userData = { body, head, tail };
    return root;
  }

  function makeMouse() {
    const root = new THREE.Group();
    const body = new THREE.Group();
    root.add(body);

    ball(body, "body", mouseFur, [0, 0.48, 0], [0.34, 0.4, 0.29]);
    ball(body, "belly", cream, [0, 0.46, 0.23], [0.23, 0.27, 0.1]);

    for (const side of [-1, 1]) {
      ball(body, "foot", mouseFur, [side * 0.19, 0.13, 0.09], [0.15, 0.09, 0.18]);
    }

    const head = new THREE.Group();
    head.position.set(0, 0.96, 0.04);
    body.add(head);

    ball(head, "head", mouseFur, [0, 0, 0], [0.4, 0.37, 0.34], 32);
    ball(head, "ear", mouseFur, [-0.3, 0.29, 0], [0.22, 0.24, 0.1]);
    ball(head, "ear", mouseFur, [0.3, 0.29, 0], [0.22, 0.24, 0.1]);
    ball(head, "inner ear", mouseInner, [-0.3, 0.3, 0.09], [0.14, 0.16, 0.035]);
    ball(head, "inner ear", mouseInner, [0.3, 0.3, 0.09], [0.14, 0.16, 0.035]);

    for (const side of [-1, 1]) {
      ball(head, "eye", white, [side * 0.14, 0.06, 0.29], [0.085, 0.105, 0.055]);
      ball(head, "pupil", eyeMaterial, [side * 0.14, 0.05, 0.34], [0.046, 0.065, 0.025]);
    }

    ball(head, "muzzle", cream, [0, -0.13, 0.3], [0.2, 0.13, 0.1]);
    ball(head, "nose", pink, [0, -0.09, 0.39], [0.055, 0.045, 0.035]);

    for (const side of [-1, 1]) {
      tube(head, [
        [side * 0.1, -0.14, 0.34],
        [side * 0.35, -0.12, 0.32],
        [side * 0.44, -0.1, 0.28]
      ], 0.007, cream);
    }

    const tail = tube(body, [
      [0.1, 0.36, -0.17],
      [0.38, 0.28, -0.28],
      [0.62, 0.37, -0.3],
      [0.78, 0.28, -0.3]
    ], 0.025, mouseInner);
    tail.name = "tail";

    root.userData = { body, head, tail };
    return root;
  }

  function setupStage(config) {
    const stage = document.getElementById(config.id);
    if (!stage) return null;

    const canvas = document.getElementById(config.canvasId) ||
      stage.querySelector("canvas");

    if (!canvas) {
      console.warn("3D animation: canvas not found for", config.id);
      return null;
    }

    const image = stage.querySelector(".character-art");
    if (image) image.style.display = "none";

    stage.style.position = stage.style.position || "relative";
    canvas.style.display = "block";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.zIndex = "1";

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 2.2, 8.5);
    camera.lookAt(0, 1.05, 0);

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    scene.add(new THREE.HemisphereLight(0xffffff, 0xb6a1a0, 2.1));

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.8);
    keyLight.position.set(-3, 6, 5);
    scene.add(keyLight);

    const fillLight = new THREE.PointLight(0xffc5d5, 30, 15);
    fillLight.position.set(3, 3, 3);
    scene.add(fillLight);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(1.65, 48),
      new THREE.MeshStandardMaterial({
        color: "#f7dce6",
        transparent: true,
        opacity: 0.38,
        roughness: 1
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(0, 0.02, 0);
    scene.add(floor);

    const cat = makeCat();
    const mouse = makeMouse();

    cat.position.set(-0.82, 0, 0);
    mouse.position.set(0.95, 0, 0.12);
    mouse.scale.setScalar(0.78);

    scene.add(cat, mouse);

    const actor = {
      stage,
      scene,
      camera,
      renderer,
      cat,
      mouse,
      action: "idle",
      actionStart: performance.now(),
      width: 0,
      height: 0
    };

    function resize() {
      const rect = stage.getBoundingClientRect();
      const width = Math.max(1, Math.round(rect.width));
      const height = Math.max(1, Math.round(rect.height));

      if (width === actor.width && height === actor.height) return;

      actor.width = width;
      actor.height = height;
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    }

    actor.resize = resize;
    resize();

    if ("ResizeObserver" in window) {
      const observer = new ResizeObserver(resize);
      observer.observe(stage);
      actor.observer = observer;
    } else {
      window.addEventListener("resize", resize);
    }

    return actor;
  }

  function setAction(actor, action) {
    if (!actor || !["idle", "hug", "bonk"].includes(action)) return;
    actor.action = action;
    actor.actionStart = performance.now();
  }

  window.addEventListener("characters-3d-action", event => {
    const detail = event.detail || {};
    const actor = actors.get(detail.stageId);
    if (actor) setAction(actor, detail.action);
  });

  for (const config of stages) {
    const actor = setupStage(config);
    if (actor) actors.set(config.id, actor);
  }

  function smooth(t) {
    t = Math.max(0, Math.min(1, t));
    return t * t * (3 - 2 * t);
  }

  function animate(now) {
    requestAnimationFrame(animate);

    for (const actor of actors.values()) {
      const elapsed = (now - actor.actionStart) / 1000;
      const wave = Math.sin(now * 0.0025);
      const cat = actor.cat;
      const mouse = actor.mouse;
      const catParts = cat.userData;
      const mouseParts = mouse.userData;

      cat.position.x = -0.82;
      mouse.position.x = 0.95;
      cat.rotation.y = 0;
      mouse.rotation.y = 0;
      cat.rotation.z = 0;
      mouse.rotation.z = 0;
      catParts.body.rotation.z = wave * 0.025;
      mouseParts.body.rotation.z = -wave * 0.035;
      catParts.head.rotation.z = Math.sin(now * 0.0018) * 0.035;
      mouseParts.head.rotation.z = Math.sin(now * 0.0022 + 1) * 0.045;
      cat.position.y = Math.abs(Math.sin(now * 0.002)) * 0.045;
      mouse.position.y = Math.abs(Math.sin(now * 0.0025 + 1)) * 0.06;

      if (actor.action === "hug") {
        const t = smooth(elapsed / 0.45);
        cat.position.x = THREE.MathUtils.lerp(-0.82, -0.28, t);
        mouse.position.x = THREE.MathUtils.lerp(0.95, 0.34, t);
        cat.rotation.z = -0.08 * t;
        mouse.rotation.z = 0.1 * t;
        catParts.head.rotation.z += 0.12 * t;
        mouseParts.head.rotation.z -= 0.12 * t;

        if (elapsed > 0.45) {
          const cuddle = Math.sin((elapsed - 0.45) * 5) * 0.025;
          cat.position.y += cuddle;
          mouse.position.y -= cuddle;
        }
      } else if (actor.action === "bonk") {
        const approach = smooth(elapsed / 0.28);
        const impact = Math.max(0, 1 - Math.abs(elapsed - 0.32) / 0.2);
        const recoil = smooth((elapsed - 0.36) / 0.3);

        mouse.position.x = THREE.MathUtils.lerp(0.95, -0.15, approach);
        mouse.position.y += Math.sin(approach * Math.PI) * 0.3;
        catParts.head.rotation.z = -0.3 * impact + 0.22 * recoil;
        cat.position.x = -0.82 - 0.12 * impact + 0.05 * recoil;
        mouse.rotation.z = -0.25 * impact + 0.1 * recoil;
        catParts.body.rotation.z = -0.08 * impact;

        if (elapsed > 0.85) setAction(actor, "idle");
      }

      actor.renderer.render(actor.scene, actor.camera);
    }
  }

  requestAnimationFrame(animate);
})();

