import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import Button from "@mui/material/Button";
import Blue from "../../assets/Blue.svg";
import Pink from "../../assets/Pink.svg";
import Purple from "../../assets/Purple.svg";
import Yellow from "../../assets/Yellow.svg";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const pages = [
  { name: "All", link: "" },
  { name: "Brand", link: "" },
  { name: "UI/UX Design", link: "" },
  { name: "Development", link: "" },
  { name: "Illustration", link: "" },
  { name: "Marketing Strategy", link: "" },
];

const projects = {
  All: [
    { 
      img: Purple, 
      title: "Purple Project", 
      description: "Brand Identity",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
    { 
      img: Yellow, 
      title: "Yellow Project", 
      description: "UI/UX Design",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
    { 
      img: Blue, 
      title: "Blue Project", 
      description: "Development",
      category: "Project Management Website Design",
      ctaText: "Learn More" 
    },
    { 
      img: Pink, 
      title: "Pink Project", 
      description: "Illustration",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
  ],
  Brand: [
    { 
      img: Purple, 
      title: "Purple Project", 
      description: "Brand Identity",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
  ],
  "UI/UX Design": [
    { 
      img: Yellow, 
      title: "Yellow Project", 
      description: "UI/UX Design",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
  ],
  Development: [
    { 
      img: Blue, 
      title: "Blue Project", 
      description: "Development",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
  ],
  Illustration: [
    { 
      img: Pink, 
      title: "Pink Project", 
      description: "Illustration",
      category: "Project Management Website Design",
      ctaText: "Learn More"
    },
  ],
  "Marketing Strategy": [],
};

function LatestWork() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <Box className="method-container" sx={{ padding: "2rem 0", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Heading */}
      <Box sx={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ 
          fontSize: "2.5rem", 
          fontWeight: "700",
          margin: "0",
          padding: "0"
        }}>
          <span>Our </span>
          <span style={{ 
            position: "relative", 
            display: "inline-block" 
          }}>
            Latest Works
            <span style={{ 
              position: "absolute",
              bottom: "-10px",
              left: "0",
              width: "100%",
              height: "4px",
              backgroundColor: "#FFD700",
              borderRadius: "2px"
            }}></span>
          </span>
        </h1>
      </Box>

      {/* Category Menu */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {pages.map((page, index) => (
          <Button
            key={index}
            sx={{
              padding: "0.5rem 2rem",
              borderRadius: "8px",
              backgroundColor: selectedCategory === page.name ? "#6C63FF" : "transparent",
              color: selectedCategory === page.name ? "#ffffff" : "#000000",
              fontWeight: selectedCategory === page.name ? "500" : "400",
              fontSize: "1rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: selectedCategory === page.name ? "#6C63FF" : "rgba(108, 99, 255, 0.1)",
              },
              transition: "all 0.3s ease"
            }}
            onClick={() => setSelectedCategory(page.name)}
          >
            {page.name}
          </Button>
        ))}
      </Box>

      {/* Projects Grid */}
      <Box sx={{ padding: "0 1rem" }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Grid container spacing={3}>
              {projects[selectedCategory].map((project, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ 
                      y: -8,
                      boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.12)"
                    }}
                    style={{
                      backgroundColor: 
                        project.title === "Purple Project" ? "#f8f8ff" :
                        project.title === "Yellow Project" ? "#fffff8" :
                        project.title === "Blue Project" ? "#f0f8ff" :
                        project.title === "Pink Project" ? "#fff5f8" : "#ffffff",
                      borderRadius: "16px",
                      overflow: "hidden",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "0px 6px 20px rgba(0, 0, 0, 0.06)",
                      border: "1px solid rgba(0, 0, 0, 0.04)",
                      transition: "all 0.3s ease"
                    }}
                  >
                    {/* Image Container - With proper aspect ratio */}
                    <div style={{ 
                      position: "relative", 
                      paddingTop: "65%", // 16:9 aspect ratio 
                      overflow: "hidden"
                    }}>
                      <motion.img
                        src={project.img}
                        alt={project.title}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: "center"
                        }}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      />
                      
                      {/* Category badge overlaid on image */}
                      <div style={{
                        position: "absolute",
                        bottom: "12px",
                        left: "12px",
                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        backdropFilter: "blur(4px)",
                        padding: "6px 12px",
                        borderRadius: "20px",
                        fontSize: "0.75rem",
                        fontWeight: "500",
                        color: "#6C63FF",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                      }}>
                        {project.description}
                      </div>
                    </div>

                    {/* Card Content with improved typography */}
                    <Box sx={{ 
                      padding: "1.5rem", 
                      display: "flex", 
                      flexDirection: "column",
                      flex: 1
                    }}>
                      <Box sx={{ marginBottom: "1rem" }}>
                        <h3 style={{
                          margin: "0 0 0.5rem",
                          fontSize: "1.5rem",
                          fontWeight: "600",
                          letterSpacing: "-0.02em",
                          color: "#222",
                          lineHeight: 1.2
                        }}>
                          {project.title}
                        </h3>
                        <p style={{
                          margin: 0,
                          color: "#666",
                          fontSize: "0.875rem",
                          lineHeight: 1.6
                        }}>
                          {project.category}
                        </p>
                      </Box>
                      
                      <Box sx={{ 
                        marginTop: "auto", 
                        display: "flex", 
                        justifyContent: "flex-end" 
                      }}>
                        <Button
                          size="small"
                          sx={{ 
                            fontSize: "0.875rem", 
                            fontWeight: "500",
                            color: "#6C63FF",
                            textTransform: "none",
                            padding: "0.5rem 1rem",
                            borderRadius: "8px",
                            backgroundColor: "rgba(108, 99, 255, 0.08)",
                            transition: "all 0.2s ease",
                            "&:hover": {
                              backgroundColor: "rgba(108, 99, 255, 0.15)",
                              transform: "translateY(-2px)"
                            }
                          }}
                        >
                          {project.ctaText}
                        </Button>
                      </Box>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Box>

      {/* CTA Button */}
      <Box sx={{ textAlign: "center", marginTop: "4rem" }}>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            sx={{
              backgroundColor: "#6C63FF",
              color: "white",
              padding: "0.75rem 2rem",
              borderRadius: "8px",
              fontWeight: "500",
              textTransform: "none",
              fontSize: "1rem",
              boxShadow: "0px 4px 15px rgba(108, 99, 255, 0.3)",
              "&:hover": {
                backgroundColor: "#5A52D5",
              },
            }}
          >
            Get started for free
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
}

export default LatestWork;